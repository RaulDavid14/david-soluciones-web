from django import forms

class ContactoForm(forms.Form):
    nombre = forms.CharField(max_length=255, label='Nombre')
    telefono = forms.IntegerField(label='Teléfono celular')
    email = forms.EmailField(label='Correo')
