from django.db import models

# Create your models here.
class SolicitudProyectoModel(models.Model):
    nombre = models.CharField(max_length=256)

    nombre_organizacion = models.CharField(max_length=256)

    email = models.EmailField()

    telefono = models.CharField(max_length=15)

    descripcion_proyecto = models.TextField()

    presupuesto = models.CharField(max_length=40)

    fecha_solicitud = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'solicitudes_proyectos'
        verbose_name = 'Solicitud de proyecto'
        verbose_name_plural = 'Solicitudes de proyectos'
        
    def __str__(self):
        return f'{self.nombre} - email: {self.email}'