# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Review(models.Model):
    id_review = models.IntegerField(primary_key=True)
    email = models.CharField(max_length=45, blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'review'

    def __str__(self):
        return self.email


class Send(models.Model):
    id_send = models.IntegerField(primary_key=True)
    from_field = models.CharField(db_column='from', max_length=45, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    from_count = models.CharField(max_length=45, blank=True, null=True)
    to = models.CharField(max_length=45, blank=True, null=True)
    to_count = models.CharField(max_length=45, blank=True, null=True)
    email = models.CharField(max_length=45, blank=True, null=True)
    pay_from = models.CharField(max_length=45, blank=True, null=True)
    pay_to = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'send'
