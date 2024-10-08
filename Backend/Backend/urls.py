from django.urls import URLPattern, path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from Backend.Core.user.views import AmbulanceRequestViewSet, ApppointmentViewSet
from Backend.Core.user.views import MedicationViewSet
from Backend.Core.user.views import PatientViewSet
from Backend.core.user.views import register_user

router = DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'medications', MedicationViewSet)
router.register(r'appointments', ApppointmentViewSet)
router.register(r'ambulance', AmbulanceRequestViewSet)

urlPatterns = [
    path('api/', include(router.urls)),
    path('api/auth/register/', register_user),
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]