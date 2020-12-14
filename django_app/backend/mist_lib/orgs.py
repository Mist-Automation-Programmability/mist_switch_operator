import requests
import json

from .common import Common

class Orgs(Common):

    def installer_setting(self, body):
        try:                 
            url = "https://{0}/api/v1/orgs/{1}/setting".format(body["host"], body["org_id"])
            resp = requests.get(url, headers=body["headers"], cookies=body["cookies"])                                
            if "installer" in resp.json():
                data = resp.json()["installer"]
            else:
                data = None          
            return data
        except:
            return {"error": "unable to retrieve the Org Settings"}

    def _load_sites(self, body):
        try:
            if "role" in body and body["role"] in ["write", "admin"]:
                url = "https://{0}/api/v1/orgs/{1}/sites".format(
                    body["host"], body["org_id"])
            else:
                url = "https://{0}/api/v1/installer/orgs/{1}/sites".format(
                    body["host"], body["org_id"])
            resp = requests.get(
                url, headers=body["headers"], cookies=body["cookies"])
            return resp.json()
        except:
            return "error"

    def _update_org_installer(self, body, org_id, site_id, enabled):
        try:
            installer_setting = self.installer_setting(body)
            if enabled and installer_setting:
                if "extra_site_ids" in installer_setting:
                    installer_setting["extra_site_ids"].append(site_id)
                else:
                    installer_setting["extra_site_ids"] = [site_id]
            elif enabled:
                installer_setting = {
                    "extra_site_ids": [site_id]
                }
            else:
                if "allow_all_sites" in installer_setting and installer_setting["allow_all_sites"]==True:
                    sites = self._load_sites(body)
                    site_ids = []
                    for site in sites:
                        if site_id != site["id"]:
                            site_ids.append(site["id"])
                    installer_setting["allow_all_sites"] = False
                    installer_setting["extra_site_ids"] = site_ids   
                elif "extra_site_ids" in installer_setting and site_id in installer_setting["extra_site_ids"]:
                    installer_setting["extra_site_ids"].remove(site_id)              
            if installer_setting:
                url = "https://{0}/api/v1/orgs/{1}/setting".format(body["host"], body["org_id"])
                resp=requests.put(url, headers=body["headers"], cookies=body["cookies"], json={"installer": installer_setting})
                return {"status": 200, "data":{"result": True}}
        except:
            return {"status": 500, "data":{"error": {"message":"Unable to update the org settings"}}}
