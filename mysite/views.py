from django.shortcuts import render

from mysite.models import Blog

# Create your views here.
def blog(request):
	blog_list = Blog.objects.order_by('-pub_date')
	context = {'blogs': blog_list}
	return render(request, 'blog.html', context)