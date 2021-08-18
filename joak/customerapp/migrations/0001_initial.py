# Generated by Django 3.2.6 on 2021-08-10 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CateringForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=25)),
                ('last_name', models.CharField(max_length=25)),
                ('phone_number', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=254)),
                ('people_attending', models.CharField(max_length=25)),
                ('budget', models.CharField(max_length=25)),
                ('event_date', models.DateField()),
                ('location', models.CharField(max_length=25)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=25)),
                ('last_name', models.CharField(max_length=25)),
                ('phone_number', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ReviewForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=25)),
                ('last_initial', models.CharField(max_length=25)),
                ('date_visited', models.DateTimeField()),
                ('food_rating', models.FloatField()),
                ('service_rating', models.FloatField()),
                ('review_message', models.TextField()),
            ],
        ),
    ]