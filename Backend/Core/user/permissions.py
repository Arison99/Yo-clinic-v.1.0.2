from rest_framework.permissions import BasePermission
from django.contrib.auth.models import Group, Permission

# Create Doctor group and assign permissions
doctor_group, created = Group.objects.get_or_create(name='Doctor')

#Add specific permissions(eg.  view patient records)
view_patient_permission = Permission.objects.get(codenname='view_patient')
doctor_group.permissions.add(view_patient_permission)


class IsDoctor(BasePermission):
    def has_Permission(self, request, view):
        return request.user.is_authenticated and request.user.groups.filter (name='Doctor')
    
class IsDoctorOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in ['GET']:
            return True
        return request.user.is_authenticated and request.user.profile.role == 'Doctor'