from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def SignIn(request):
    return HttpResponse("Welcome to Yo-Clinic. Signin to access our services")
