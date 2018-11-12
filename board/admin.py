from django.contrib import admin
from .models import *

from .models import Job
# Register your models here.
admin.site.register(User)
admin.site.register(Partner_Profile)
admin.site.register(Staff_Profile)
admin.site.register(Job)
