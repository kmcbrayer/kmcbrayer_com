# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_blog_sub_header'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='sub_header',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
    ]
