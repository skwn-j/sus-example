#backend/post/serializers.py
from rest_framework import serializers
from .models import Post
import json

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Post

    def create(self, validated_data):
        content = validated_data['content']
        return validated_data
    def validate(self, attrs):
        return attrs