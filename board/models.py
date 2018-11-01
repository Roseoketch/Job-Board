from django.db import models

class Jobs(models.Model):
    title = models.CharField(max_length =255)
    descriptions = models.CharField(max_length =255)
    requirements = models.CharField(max_length =255)
    date_posted = models.DateField()
    hiring_partner = models.ForeignKey(Partner_Profile, on_delete=models.CASCADE)
    approved = models.BooleanField(default = False)


class Partners_Profile(models.Model):
    Partner_name  = models.CharField(max_length =255)
    bio = models.CharField(max_length =255)
    address =  models.CharField(max_length =255)
    email = models.EmailField(null=True)
    partner_logo = models.ImageField()

class Staff(models.Model):
    email = models.EmailField(null=False)

# Create your models here.
