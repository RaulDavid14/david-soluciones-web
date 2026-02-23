from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('panel-interno/', admin.site.urls),
    path('', include("solicitud_proyectos_app.urls")),
]