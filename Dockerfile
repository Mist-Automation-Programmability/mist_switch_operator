FROM python:3

LABEL maintainer="tmunzer@juniper.net"
LABEL one.stag.miswi.version="1.1.0"
LABEL one.stag.miswi.release-date="2020-11-17"


RUN pip install --upgrade pip
RUN pip install --no-cache-dir django whitenoise requests

COPY ./django_app/ /app/
WORKDIR /app

RUN addgroup --gid 1000 -S mistlab && adduser --uid 1000 -S mistlab -G mistlab
RUN chown -R mistlab:mistlab /app
USER mistlab

EXPOSE 8000
CMD ["python","-u","/app/manage.py", "runserver", "0.0.0.0:8000"]
