from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *

# Create your views here.
class CateringFormView(viewsets.ModelViewSet):
    serializer_class = CateringFormSerializer
    queryset = CateringForm.objects.all()

class ContactFormView(viewsets.ModelViewSet):
    serializer_class = ContactFormSerializer
    queryset = ContactForm.objects.all()

class ReviewFormView(viewsets.ModelViewSet):
    serializer_class = ReviewFormSerializer
    queryset = ReviewForm.objects.all()