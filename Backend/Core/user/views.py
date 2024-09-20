#views.py
from rest_framework import viewsets
from yaml import serialize
from .models import Medication
from .serializers import MedicationSerializer

class MedicationsViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer