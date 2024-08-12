from django.db import models

class User(models.Model):
    Full_Name = models.CharField(max_length=70)

    def __str__(self):
        return self.Full_Name

# Create your models here.
class SignIn(models.Model):
    Full_Name = models.CharField(max_length=50)
    Email = models.CharField(max_length=200)
    Password = models.CharField(min_length=8)
    User = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.Full_Name
    


