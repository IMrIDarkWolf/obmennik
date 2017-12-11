import requests
from django.shortcuts import render
from django.http import HttpResponse
from .models import Send, Review

def index(request):
    if request.method == "GET" and request.is_ajax():
        if request.GET.get('typet') == 'take':
            first = request.GET['coin']
            last = request.GET['coins']
            give = request.GET['give']

            res = requests.get("https://bittrex.com/api/v1.1/public/getorderbook?market=" + first + "-" + last + "&type=both")

            val = res.json()['result']['buy'][0]['Rate']
            val = float(give) * float(val)

            return HttpResponse(val)

        elif request.GET.get('typet') == 'review':
            rev = Review()

            rev.id_review = 4
            rev.email = request.GET.get('mail')
            rev.text = request.GET.get('review')

            rev.save()
        return HttpResponse()

    elif request.method == "POST" and request.is_ajax():
        send = Send()

        send.id_send = 2
        send.to = request.POST.get('give')
        send.email = 'jaeki94@gmail.com'
        send.save()

    return render (request, 'obmennik/index.html', {'reviews': Review.objects.all()})
