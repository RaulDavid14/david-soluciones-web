from rest_framework import serializers

from solicitud_proyectos_app.models import SolicitudProyectoModel

class SolicitudSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SolicitudProyectoModel
        fields = '__all__'
        read_only_fields = ['id', 'fecha_solicitud']
