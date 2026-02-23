from django.contrib import admin
from solicitud_proyectos_app.models import SolicitudProyectoModel

@admin.register(SolicitudProyectoModel)
class SolicitudProyectoAdmin(admin.ModelAdmin):
    list_display = (
        'nombre',
        'email',
        'telefono',
        'presupuesto',
        'fecha_solicitud',
    )

    list_filter = ('fecha_solicitud',)
    search_fields = ('nombre', 'email', 'telefono')
    readonly_fields = ('fecha_solicitud',)