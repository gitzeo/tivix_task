
from django.views import View
from .models import Post
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PostSerializers
from rest_framework import status


class PostsView(APIView):

    def get(self, request, pk=None):
        if pk:
            posts = Post.objects.filter(pk=pk)
        else:
            posts = Post.objects.all()
        serializer = PostSerializers(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializers(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        snippet = Post.objects.get(pk=pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
