# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-08-06 05:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('donations', '0016_donationfulfillment_dropoff_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='neighborhood',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='locations', to='donations.Neighborhood'),
        ),
    ]
