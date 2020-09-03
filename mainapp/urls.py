from django.urls import path
from . import views
from django.views.generic import RedirectView
from django.views.generic import RedirectView

urlpatterns = [
    path('start/', views.start),
    path('bubble/', views.BubbleSort),
    path('selection/', views.SelectionSort),
    path('insertion/', views.InsertionSort),
    path('quick/', views.QuickSort),
    path('', RedirectView.as_view(url='start/')),
]
