from django.urls import path
from .views import PostsView

app_name='tivix'
urlpatterns = [
    path('posts/', PostsView.as_view()),
    path('posts/<int:pk>', PostsView.as_view())
]