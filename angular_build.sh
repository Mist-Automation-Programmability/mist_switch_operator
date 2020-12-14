#!/bin/bash

cd src_angular/
ng build --deploy-url static/
cp dist/mso/* ../django_app/mso/static
cp dist/mso/index.html ../django_app/mso/templates
cd ..
