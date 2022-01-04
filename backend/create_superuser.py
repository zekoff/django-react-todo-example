from django.core import management
import os

print('Inside create_superuser.py')
print(os.environ.get('DJANGO_SUPERUSER_USERNAME'))
management.call_command('createsuperuser', interactive=False)
