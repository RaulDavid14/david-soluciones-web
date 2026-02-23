from .base import *

DEBUG = True

ALLOWED_HOSTS = []

ENABLE_EMAIL_NOTIFICATIONS = True

CORS_ALLOWED_ORIGINS = [
    'https://davidsolucionesti.com.mx'
    ,'https://www.davidsolucionesti.com.mx'
    ,'http://localhost:5173'
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'leads',
        'USER': 'root',
        'PASSWORD': '1234',
        'HOST': 'localhost',
        'PORT': '3306',
    },
}
