from django.urls import path
from django.conf.urls import handler404

from . import views

urlpatterns = [
    path(r'', views.index.as_view(), name='index'),
]

handler404 = views.handler404