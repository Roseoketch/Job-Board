from rest_framework import viewsets

from board.models import Jobs
from .serializers import JobsSerializer

class JobsViewSet(viewsets.ModelViewSet):
    serializer_class = JobsSerializer
    queryset = Jobs.objects.all()
