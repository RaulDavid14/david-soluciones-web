from .base import *

DEBUG = False

ALLOWED_HOSTS = ['davidsoluciones.pythonanywhere.com']

CORS_ALLOWED_ORIGINS = [
    'https://davidsolucionesti.com.mx'
    ,'https://www.davidsolucionesti.com.mx'
]


DATABASES = {
    'default': {
        'ENGINE': config('DJANGO_ENGINE'),
        'NAME': config('DB_DATABASE'),
        'USER': config('DB_USERNAME'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT'),
    },
}
