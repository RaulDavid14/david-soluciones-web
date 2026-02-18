from rest_framework.generics import CreateAPIView
from solicitud_proyectos_app.serializers.solicitud import SolicitudSerializer
from django.conf import settings
from django.core.mail import EmailMessage, EmailMultiAlternatives


class CreateSolicitudAV(CreateAPIView):
    serializer_class = SolicitudSerializer

    def perform_create(self, serializer):
        solicitud = serializer.save()

        subject = f"Nuevo proyecto: {solicitud.nombre}"

        text_content = (
            f"Nombre: {solicitud.nombre}\n"
            f"Organización: {solicitud.nombre_organizacion}\n"
            f"Teléfono: {solicitud.telefono}\n"
            f"Descripción del proyecto: {solicitud.descripcion_proyecto}\n"
            f"Presupuesto: {solicitud.presupuesto}\n"
            f"Fecha de solicitud: {solicitud.fecha_solicitud}\n"
        )

        html_content = f"""
        <html>
        <body>
            <h2>📩 Nueva solicitud de proyecto</h2>

            <p><strong>Nombre:</strong> {solicitud.nombre}</p>
            <p><strong>Organización:</strong> {solicitud.nombre_organizacion}</p>
            <p><strong>Email:</strong> {solicitud.email}</p>
            <p><strong>Teléfono:</strong> {solicitud.telefono}</p>
            <p><strong>Descripción:</strong><br>{solicitud.descripcion_proyecto}</p>
            <p><strong>Presupuesto:</strong> {solicitud.presupuesto}</p>
            <p><strong>Fecha:</strong> {solicitud.fecha_solicitud}</p>

            <hr>
            <small>Enviado desde tu landing 🚀</small>
        </body>
        </html>
        """

        email = EmailMultiAlternatives(
            subject=subject,
            body=text_content,
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.EMAIL_HOST_USER],
            reply_to=[solicitud.email],
        )

        email.attach_alternative(html_content, "text/html")
        email.send(fail_silently=False)