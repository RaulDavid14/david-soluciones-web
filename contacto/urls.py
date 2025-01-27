from django.urls import path
from .views import enviar, index
    
urlpatterns = [
    path('', index, name = 'contacto'),
    path('enviar', enviar, name='enviar'),
]
