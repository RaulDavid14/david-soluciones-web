from rest_framework import serializers

from solicitud_proyectos_app.models import SolicitudProyectoModel

class SolicitudSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SolicitudProyectoModel
        fields = '__all__'
        read_only_fields = ['id', 'fecha_solicitud', 'fecha_aceptacion']
        
    def validate_acepta_aviso(self, value):
        if not value:
            raise serializers.ValidationError(
                "Debes aceptar el aviso de privacidad para continuar."
            )
        return value
