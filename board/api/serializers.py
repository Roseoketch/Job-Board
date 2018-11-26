from rest_framework import serializers
from board.models import Job

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'title', 'descriptions', 'requirements', 'date_posted', 'approved')
