from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

from Backend.Core.user.views import AmbulanceRequestViewSet, ApppointmentViewSet
from Backend.Core.user.views import MedicationsViewSet
from Backend.Core.user.views import PatientViewSet
from Core.user.views import AmbulanceRequestViewSet  # Corrected import paths
from Core.user.views import register_user  # Import register_user

router = DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'medications', MedicationsViewSet)
router.register(r'appointments', ApppointmentViewSet)
router.register(r'ambulance', AmbulanceRequestViewSet)

urlPatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Core.user.urls')), 
    path('api/', include(router.urls)),
    path('api/auth/register/', register_user),
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]