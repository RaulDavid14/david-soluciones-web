from django.db import models

class ContactoModel(models.Model):
    nombre = models.CharField(max_length=255, verbose_name = 'nombre')
    telefono = models.IntegerField(verbose_name = 'telefono-celular')
    email = models.EmailField(verbose_name = 'correo')
    