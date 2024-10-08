#views.py
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken 
from rest_framework_simplejwt.views import TokenObtainPairView
from yaml import serialize
from .models import Medication, Patient
from .models import Appointment
from .models import AmbulanceRequest
from .models import PatientRecord
from .Serializers import AppointmentSerializer, PatientSerializer
from .Serializers import MedicationSerializer
from .permissions import IsDoctor
from .permissions import IsDoctorOrReadOnly
from .Serializers import AmbulanceRequestSerializer
from .Serializers import PatientRecordSerializer


@api_view(['POST'])
def register_user(request):
    role=request.data.get('role')
    if role not in ['Doctor', 'Patient']:
        return Response({'error': 'Invald role'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(
        username=request.data['username'],
        password=request.data['password'],
        email=request.data['email']
    )
    user.profile.role = role #Assuming a Profile model extending the user model
    user.save()
    return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)



class MedicationsViewSet(viewsets.ModelViewSet):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer
    permission_classes = [IsDoctorOrReadOnly] #Doctors can add, others can read only


class PatientViewSet(viewsets.ModelViewSet):
    queryst = Patient.objects.all()
    Serializer_class = PatientSerializer

    #Only dioctors can view all patients
    permission_classes = [IsDoctor]


    def get_query(self):
        ##Doctors can view all patients, but patients can only see their own data
        user = self.request.user
        if user.profile.role == 'Doctor':
            return Patient.objects.all()
        return Patient.objects.filter(user=user)
    


class ApppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
       user = self.request.user
       if user.profile.role == 'Doctor':
           return Appointment.objects.filter(doctor=user)
       return Appointment.objects.filter(patient=user)
    


class AmbulanceRequestViewSet(viewsets.ModelViewSet):
    queryset = AmbulanceRequest.objects.all()
    serializer_class = AmbulanceRequestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
       serializer.save(patient=self.rquest.user)


class PatientRecordViewSet(viewsets.ModelViewSet):
    queryset = PatientRecord.objects.all()
    serializer_class = PatientRecordSerializer
    permission_classes = [IsDoctor]