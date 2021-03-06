# Generated by Django 3.2.6 on 2021-08-16 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customerapp', '0006_auto_20210816_1708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cateringform',
            name='additional_hours',
            field=models.CharField(blank=True, choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4')], default=0, max_length=25),
        ),
        migrations.AlterField(
            model_name='reviewform',
            name='date_visited',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='reviewform',
            name='food_rating',
            field=models.CharField(blank=True, choices=[('Not very good', 'Not very good'), ('Not good', 'Not good'), ('OK', 'OK'), ('Good', 'Good'), ('Very good', 'Very good')], max_length=25),
        ),
        migrations.AlterField(
            model_name='reviewform',
            name='service_rating',
            field=models.CharField(blank=True, choices=[('Not very good', 'Not very good'), ('Not good', 'Not good'), ('OK', 'OK'), ('Good', 'Good'), ('Very good', 'Very good')], max_length=25),
        ),
    ]
