# -*- coding: utf-8 -*-
# Generated by Django 1.11.22 on 2019-09-07 15:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0001_initial'),
        ('donations', '0023_phone_number_field'),
    ]

    operations = [
        migrations.AddField(
            model_name='donationrequest',
            name='org',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='donation_requests', to='organizations.Org'),
        ),
        migrations.AddField(
            model_name='location',
            name='org',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='locations', to='organizations.Org'),
        ),
    ]