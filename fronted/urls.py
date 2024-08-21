"""
URL configuration for fronted project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from home import views as home
from contacto import views as contacto
from proyectos import views as proyectos
from nosotros import views as nosotros
from servicios import views as servicios


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home.index, name='home'),
    path('contacto/', contacto.index, name='contacto'),
    path('proyectos/', proyectos.index, name='proyectos'),
    path('nosotros/', nosotros.index, name='nosotros'),
    path('servicios/', servicios.index, name='servicios'),
]

