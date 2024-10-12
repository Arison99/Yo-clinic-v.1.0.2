from django.contrib import admin
from .models import User, Patient, Medication, Appointment, AmbulanceRequest

# Register your models here.
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Medication)
admin.site.register(Appointment)
admin.site.register(AmbulanceRequest)