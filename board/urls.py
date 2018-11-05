from django.conf.urls import url
from django.urls import include, path
from board.views import board, partner_view, staff_view

urlpatterns = [
    path('', board.home, name="home")
]
