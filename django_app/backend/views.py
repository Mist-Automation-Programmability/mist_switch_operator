from django.shortcuts import render
import requests
import json
from django.http import JsonResponse, HttpResponse, Http404
import json
from django.views.decorators.csrf import csrf_exempt
import json
import time
import logging

from .mist_lib.devices import Devices
from .mist_lib.sites import Sites

try:
    from .config import google_api_key
except:
    import os
    google_api_key = os.environ.get("GOOGLE_API_KEY", default="")
#     if smtp_enabled:
#         smtp_config = {
#             "host": os.environ.get("MIST_SMTP_HOST", default=None),
#             "port": os.environ.get("MIST_SMTP_PORT", default=587),
#             "use_ssl": os.environ.get("MIST_SMTP_SSL", default=True),
#             "username": os.environ.get("MIST_SMTP_USER", default=None),
#             "password": os.environ.get("MIST_SMTP_PASSWORD", default=None),
#             "from_name": os.environ.get("MIST_SMTP_FROM_NAME", default="Wi-Fi Access"),
#             "from_email": os.environ.get("MIST_SMTP_FROM_EMAIL", default=None),
#             "logo_url": os.environ.get("MIST_SMTP_LOGO_URL", default="https://cdn.mist.com/wp-content/uploads/logo.png"),
#             "enable_qrcode": os.environ.get("MIST_SMTP_QRCODE", default=True)
#         }
#     else:
#         smtp_config = None

# try:
#     from .config import psk_config
# except:
#     psk_config = {
#         "salt": os.environ.get("MIST_PSK_SALT", default="$2b$12$SIGWr574/7OggDO4BBJ1D."),
#         "length": int(os.environ.get("MIST_PSK_LENGTH", default=12))
#     }
# psk_config["salt"] = str.encode(psk_config["salt"])

# mist_smtp = Mist_SMTP(smtp_config)


##########
# Devices
@csrf_exempt
def get_devices(request):
    if request.method == "POST":
        response = Devices().get_devices(request.body)
        return JsonResponse(status=response["status"], data=response["data"])
    else:
        return Http404


@csrf_exempt
def get_device_settings(request):
    if request.method == "POST":
        response = Devices().get_device_settings(request.body)
        return JsonResponse(status=response["status"], data=response["data"])
    else:
        return Http404


@csrf_exempt
def update_device_settings(request):
    if request.method == "POST":
        response = Devices().update_device_settings(request.body)
        return JsonResponse(status=response["status"], data=response["data"])
    else:
        return Http404


##########
# Sites


@csrf_exempt
def get_sites(request):
    if request.method == 'POST':
        response = Sites().get_sites(request.body)
        return JsonResponse(status=response["status"], data=response["data"])
    else:
        return Http404

# @csrf_exempt
# def get_site_derived(request):
#     if request.method == "POST":
#         response = Sites().get_site_derived(request.body)
#         return JsonResponse(status=response["status"], data=response["data"])
#     else:
#         return Http404


##########
# LOGIN


def _get_self(request, host, method, headers={}, cookies=None):
    if cookies == None:
        cookies_dict = None
    else:
        cookies_dict = cookies.get_dict()
    url = "https://%s/api/v1/self" % (host)
    resp = requests.get(url, headers=headers, cookies=cookies)
    data = resp.json()
    return JsonResponse({"host": host, "data": data, "method": method, "headers": headers, "cookies":  cookies_dict})


@csrf_exempt
def login(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        if "host" in body:

            if "token" in body:
                headers = {"Authorization": "Token " +
                           body["token"], 'Content-Type': "application/json"}
                return _get_self(request, body["host"], "token", headers=headers)

            elif "email" in body and "password" in body:
                url = "https://%s/api/v1/login" % (body["host"])
                data = {"email": body["email"], "password": body["password"]}
                if "two_factor" in body:
                    data["two_factor"] = body["two_factor"]
                headers = {'Content-Type': "application/json"}
                resp = requests.post(url, json=data, headers={})

                if resp.status_code == 200:
                    cookies = resp.cookies
                    return _get_self(request, body["host"], "username", headers=headers, cookies=cookies)
                else:
                    return JsonResponse(status=400, data={"message": "authentication failed"})
            elif "email" in body:
                return JsonResponse(status=401, data={"message": "authentication information are missing"})
            elif "password" in body:
                return JsonResponse(status=401, data={"message": "authentication information are missing"})
            else:
                return JsonResponse(status=500, data={"message": "authentication information are missing"})
        else:
            return JsonResponse(status=500, data={"message": "host missing"})
    else:
        return JsonResponse(status=400, data={"message": "not allowed"})

# ##########
# # EMAIL


# @csrf_exempt
# def emailPsk(request):
#     if request.method == 'POST':
#         body_unicode = request.body.decode("utf-8")
#         body = json.loads(body_unicode)
#         if "name" in body and "user_email" in body and "ssid" in body and "psk" in body:
#             resp = mist_smtp.send_psk(
#                 body["psk"], body["ssid"], body["name"], body["user_email"])
#             return JsonResponse({"result": resp})
#         else:
#             return JsonResponse(status=500, data={"message": "missing parametesr"})

@csrf_exempt
def gap(request):
    if request.method == "GET":
        return JsonResponse({"gap": google_api_key})


@csrf_exempt
def script(request):
    if request.method == "GET":
        data = """
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key={0}&callback=initMap';
script.defer = true;

window.initMap = function() {{
}};

// Append the 'script' element to 'head'
document.head.appendChild(script);
        """.format(google_api_key)
        return HttpResponse(data, content_type="application/javascript")
