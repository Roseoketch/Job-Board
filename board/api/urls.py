from board.api.views import JobsViewSet
from django.urls import path
from rest_framework.routers import DefaultRouter

router =  DefaultRouter()

router.register(r'', JobsViewSet, base_name ='jobs')

urlpatterns = router.urls
