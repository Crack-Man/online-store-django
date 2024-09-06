import uuid

from django.db import models


def item_image_directory_path(instance, filename):
    return f'upload/items/item_{instance.id}/{filename}'

class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to=item_image_directory_path)

    def __str__(self):
        return self.title
