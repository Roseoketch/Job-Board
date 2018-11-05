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

# class Partners_Profile(models.Model):
#     '''
#     Class to define a Hiring Partner profile
#     '''
#     partner_name  = models.CharField(max_length =255)
#     bio = models.CharField(max_length =255)
#     address =  models.CharField(max_length =255)
#     email = models.EmailField(null=True)
#     partner_logo = models.ImageField()
    
#     def __str__(self):
#         '''
#         Display for Hiring partner profile in partner profile table
#         '''
#         return self.partner_name

class Jobs(models.Model):
    '''
    Class to define Jobs posted by Hiring Partners
    '''

    title = models.CharField(max_length =255)
    descriptions = models.CharField(max_length =255)
    requirements = models.CharField(max_length =255)
    date_posted = models.DateField(auto_now_add=True)
    # hiring_partner = models.ForeignKey(Partners_Profile, on_delete=models.CASCADE)
    approved = models.BooleanField(default = False)

    def __str__(self):
        '''
        Display for jobs in the jobs table
        '''
        return self.title


    def save_job(self):
        '''
        Method to save new job to the database
        '''
        return self.save()

    def delete_job(self):
        '''
        Method to delete a job from the database
        '''
        return self.delete()
    @classmethod
    def get_jobs(cls):
        '''
        Method to get all the jobs in the database
        '''
        jobs = Jobs.objects.all()
        return jobs



class Staff_Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    email = models.EmailField(null=False)

# Create your models here.
