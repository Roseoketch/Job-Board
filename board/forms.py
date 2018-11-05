from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction

from board.models import User, Partner_Profile, Staff_Profile

class PartnerSignUpForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_partner = True
        user.save()
        partner = Partner_Profile.objects.create(user=user)

        return user

class StaffSignUpForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_staff = True
        if commit:
            user.save()
        return user
