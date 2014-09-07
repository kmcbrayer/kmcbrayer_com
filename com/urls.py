from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from mysite import views as my_views

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    
    url(r'^admin/', include(admin.site.urls)),
    url(r'^blog/', my_views.blog, name="blog"),
    #url(r'^api/', include('api.urls'))
)
