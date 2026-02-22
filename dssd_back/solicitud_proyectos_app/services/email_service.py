import threading
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


def _send_email(subject, text_content, html_content, reply_to):
    if not settings.ENABLE_EMAIL_NOTIFICATIONS:
        return

    email = EmailMultiAlternatives(
        subject=subject,
        body=text_content,
        from_email=settings.EMAIL_HOST_USER,
        to=[settings.EMAIL_HOST_USER],
        reply_to=[reply_to],
    )

    email.attach_alternative(html_content, "text/html")
    email.send(fail_silently=True)


def send_email_async(subject, text_content, html_content, reply_to):
    thread = threading.Thread(
        target=_send_email,
        args=(subject, text_content, html_content, reply_to)
    )
    thread.start()
    print('send_email_async() - Correo enviado correctamente.')