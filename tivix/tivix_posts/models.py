from django.db import models


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField()
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
