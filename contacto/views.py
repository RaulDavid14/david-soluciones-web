from django.shortcuts import render
from .forms import ContactoForm
from .models import ContactoModel

def index(request):
    datos = {
        'formulario' : ContactoForm()
    }
    return render(request, 'contacto.html', datos)

def enviar(request):
    if request.method == 'POST':
        contactoModel = ContactoModel(
            nombre = request.POST.get('nombre')
            ,telefono = request.POST.get('telefono')
            ,email = request.POST.get('email')
            )
        contactoModel.save()