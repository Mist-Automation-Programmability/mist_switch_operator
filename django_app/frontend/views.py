from django.shortcuts import render, redirect
from django.views.generic import TemplateView

class index(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)

def handler404(request, exception):    
    return redirect("/")