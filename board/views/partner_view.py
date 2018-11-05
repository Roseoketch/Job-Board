from django.shortcuts import render
from django.contrib.auth import login
from django.shortcuts import redirect
from django.views.generic import CreateView

from ..forms import PartnerSignUpForm
from ..models import User

class PartnerSignUpView(CreateView):
    """View for signing up hiring partners"""
    model = User
    form_class = PartnerSignUpForm
    template = 'registration/signup_form.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'partner'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('')
