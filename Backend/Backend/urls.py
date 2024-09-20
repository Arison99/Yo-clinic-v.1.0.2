from django.urls import URLPattern, path, include
from rest_framework.routers import DefaultRouter
from .views import MedicationViewSet

router = DefaultRouter()
router.register(r'medications', MedicationViewSet)

urlPatterns = [
    path('api/', include(router.urls)),
]