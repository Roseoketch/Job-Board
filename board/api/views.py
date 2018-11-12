from rest_framework import viewsets
from rest_framework.generics import ListAPIView, RetrieveAPIView

from board.models import Job
from .serializers import JobsSerializer

class JobsViewSet(viewsets.ModelViewSet):
    serializer_class = JobsSerializer
    queryset = Job.objects.all()

class JobDetailView(RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobsSerializer
