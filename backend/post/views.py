# backend/post/views.py
from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse


class ListPost(generics.ListCreateAPIView):
    def post(self, request):
        payload=request.data
        print(payload.get('content'))
        serializer=PostSerializer(data=payload)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
       
class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
