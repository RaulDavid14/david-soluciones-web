from django.urls import path

from solicitud_proyectos_app.views.solicitud import CreateSolicitudAV

urlpatterns = [
    path('solicitud', CreateSolicitudAV.as_view(), name='crear_solicitud'),
]
 