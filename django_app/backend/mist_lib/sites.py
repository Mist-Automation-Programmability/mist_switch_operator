import requests
import json

from .orgs import Orgs
from .common import Common


class Sites(Common):

    def get_sites(self, body):
        body = self.get_body(body)
        if "org_id" in body:
            return self._get_sites(body)            
        else:
            return {"status": 500, "data": {"message": "org_id missing"}}

    def _get_sites(self, body):
        try:            
            url = "https://{0}/api/v1/orgs/{1}/sites".format(
                    body["host"], body["org_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return {"status": 200, "data": {"sites": resp.json()}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the list of sites"}}

    def get_site_derived(self, body):        
        body = self.get_body(body)
        if "site_id" in body:
            return self._get_site_derived(body)            
        else:
            return {"status": 500, "data": {"message": "site_id missing"}}

    def _get_site_derived(self, body):
        try:            
            url = "https://{0}/api/v1/sites/{1}/setting/derived".format(
                    body["host"], body["site_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            resp_json = resp.json()
            data = []
            if "switch_matching" in resp_json:
                data.append(resp_json["switch_matching"])
            if "networks" in resp_json:
                data.append(resp_json["networks"])
            if "port_usages" in resp_json:
                data.append(resp_json["port_usages"])
            return {"status": 200, "data": {"result": data}}
        except:
            return {"status": 500, "data": {"message": "unable to retrieve the derived site settings"}}
