from django.db import models

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



class Staff(models.Model):
    email = models.EmailField(null=False)

# Create your models here.
