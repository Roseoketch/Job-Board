"""job URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from board.views import board, partner_view, staff_view
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('', include('board.urls')),
    path('token-auth/', obtain_jwt_token),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/signup',board.SignUpView.as_view(), name="signup"),
    path('accounts/signup/partner',partner_view.PartnerSignUpView.as_view(), name='partner_signup'),
    path('accounts/signup/staff',staff_view.StaffSignUpView.as_view(), name='staff_signup'),
]
