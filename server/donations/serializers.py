from datetime import datetime, timedelta

from django.utils import timezone
from rest_framework import serializers

from donations.models import (
    DonationFulfillment, DonationRequest, DropoffTime, Item, Location,
    Neighborhood
)


class ContactInfoValidator(object):
    def __call__(self, value):
        if not (value.get('phone') or value.get('email')):
            raise serializers.ValidationError('You must provide either email address or phone number.')

    def set_context(self, serializer):
        self.instance = getattr(serializer, 'instance', None)


class DropoffDateValidator(object):
    def __call__(self, value):
        dropoff_time = value.get('dropoff_time')
        dropoff_date = value.get('dropoff_date')

        if dropoff_time.day.value != dropoff_date.weekday():
            raise serializers.ValidationError('Date provided does not match dropoff time date')

        start_datetime = timezone.make_aware(
            datetime.combine(dropoff_date, dropoff_time.time_start)
        )

        if start_datetime < timezone.now():
            raise serializers.ValidationError('Cannot schedule dropoff for past date')

        if (start_datetime - timezone.now()) > timedelta(weeks=12):
            raise serializers.ValidationError('Cannot schedule dropoff more than 12 weeks in future')

    def set_context(self, serializer):
        self.instance = getattr(serializer, 'instance', None)


class ItemRequestSerializer(serializers.ModelSerializer):
    category_tag = serializers.CharField(source='category.tag')
    category_display_name = serializers.CharField(source='category.display_name')

    class Meta:
        model = Item
        fields = (
            'id', 'tag', 'display_name', 'category_tag', 'category_display_name'
        )
        read_only_fields = (
            'id', 'tag', 'display_name', 'category_tag', 'category_display_name'
        )


class DonationFulfillmentSerializer(serializers.ModelSerializer):
    code = serializers.CharField(source='request.code', read_only=True)
    request = serializers.PrimaryKeyRelatedField(
        queryset=DonationRequest.unfulfilled.all()
    )

    class Meta:
        model = DonationFulfillment
        fields = (
            'id', 'name', 'phone', 'email', 'request', 'dropoff_time', 'dropoff_date',
            'created', 'code'
        )
        read_only_fields = (
            'id', 'created',
        )
        # TODO: Add validator to raise error when request has already been fulfilled
        #       (currently raises vague 'object does not exist' error)
        validators = [ContactInfoValidator(), DropoffDateValidator()]
        extra_kwargs = {
            'email': {'required': True},
            'dropoff_date': {'required': True}
        }


class NeighborhoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Neighborhood
        fields = (
            'id', 'name',
        )


class DonationRequestSerializer(serializers.ModelSerializer):
    item = serializers.SlugRelatedField(
        slug_field='tag',
        queryset=Item.objects.all()
    )

    class Meta:
        model = DonationRequest
        fields = (
            'id', 'name', 'phone', 'email', 'item', 'size', 'neighborhood', 'code',
            'created'
        )
        read_only_fields = (
            'id', 'created', 'code'
        )
        validators = [ContactInfoValidator()]


class DonationRequestPublicSerializer(serializers.ModelSerializer):
    item = ItemRequestSerializer()
    neighborhood = NeighborhoodSerializer()

    class Meta:
        model = DonationRequest
        fields = (
            'id', 'item', 'size', 'neighborhood', 'created',
        )


class LocationSerializer(serializers.ModelSerializer):
    neighborhood = NeighborhoodSerializer()

    class Meta:
        model = Location
        fields = (
            'organization_name', 'location_name', 'neighborhood', 'street_address_1',
            'street_address_2', 'city', 'state', 'zipcode', 'phone', 'website', 'maps_url'
        )


class DropoffTimeListSerializer(serializers.ListSerializer):
    def to_representation(self, items):
        data = []

        for item in items:
            for date in item.get_visible_dates():
                child_data = self.child.to_representation(item)
                child_data['date'] = date
                data.append(child_data)

        return data


class DropoffTimeSerializer(serializers.ModelSerializer):
    location = LocationSerializer()

    class Meta:
        model = DropoffTime
        fields = (
            'id', 'time_start', 'time_end', 'location',
        )
        read_only_fields = (
            'id', 'time_start', 'time_end', 'location',
        )
        list_serializer_class = DropoffTimeListSerializer
