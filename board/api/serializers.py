from rest_framework import serializers
from board.models import Jobs

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = ('id', 'title', 'descriptions', 'requirements', 'date_posted', 'approved')