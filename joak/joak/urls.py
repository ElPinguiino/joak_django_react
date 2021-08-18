"""joak URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from customerapp import views
# from companyapp import views

router = routers.DefaultRouter()
companyrouter = routers.DefaultRouter()

#customerapp api routes
router.register(r'cateringform', views.CateringFormView, 'cateringform')
router.register(r'contactform', views.ContactFormView, 'contactform')
router.register(r'reviewform', views.ReviewFormView, 'reviewform')

#companyapp api routers
# companyrouter.register(r'customer', views.CustomerView, 'customer')
# companyrouter.register(r'product', views.ProductView, 'product')
# companyrouter.register(r'order', views.OrderView, 'order')
# companyrouter.register(r'employee', views.EmployeeView, 'employee')
# companyrouter.register(r'inspection', views.InspectionView, 'inspection')
# companyrouter.register(r'expense', views.ExpenseView, 'expense')
# companyrouter.register(r'task', views.TaskView, 'task')
# companyrouter.register(r'badge', views.BadgeView, 'badge')
# companyrouter.register(r'document', views.DocumentView, 'document')
# companyrouter.register(r'recipe', views.RecipeView, 'recipe')

# url patterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name='index.html'))
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
