from django.db import models
from django.contrib.auth.models import AbstractUser

# create the abstract user to define user roles
class User(AbstractUser):
    is_partner = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

class Partner_Profile(models.Model):
    # Relationship with the abstract user for roles.
    user = models.OneToOneField(User,on_delete=models.CASCADE, primary_key=True)
    Partner_name  = models.CharField(max_length =255)
    bio = models.CharField(max_length =255)
    address =  models.CharField(max_length =255)
    email = models.EmailField(null=True)
    partner_logo = models.ImageField()

class Jobs(models.Model):
    title = models.CharField(max_length =255)
    descriptions = models.CharField(max_length =255)
    requirements = models.CharField(max_length =255)
    date_posted = models.DateField()
    hiring_partner = models.ForeignKey(Partner_Profile, on_delete=models.CASCADE)
    approved = models.BooleanField(default = False)

class Staff_Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    email = models.EmailField(null=False)

# Create your models here.
