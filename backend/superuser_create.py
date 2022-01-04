import os
from django.contrib.auth.models import User

default_username = os.getenv('DEFAULT_GITPOD_AUTH_USERNAME')
default_password = os.getenv('DEFAULT_GITPOD_AUTH_PASSWORD')
user = User.objects.create_user(username=default_username, password=defaut_password)
user.is_superuser = True
user.is_staff = True
user.save()
