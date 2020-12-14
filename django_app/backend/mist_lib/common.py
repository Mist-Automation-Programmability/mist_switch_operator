import json


class Common:

    def get_body(self, body_raw):
        body_unicode = body_raw.decode('utf-8')
        body = json.loads(body_unicode)
        return body

    def extractAuth(self, body):
        # cookies    
        cookies = body["cookies"] if "cookies" in body else None
        # headers
        headers = body['headers'] if "headers" in body else None
        host = body["host"] if "host" in body else None
        # result
        #csrf
        if body["cookies"] :
            if "csrftoken" in body["cookies"]:
                headers["X-CSRFToken"] = body["cookies"]["csrftoken"]
            if "csrftoken.eu" in body["cookies"]:
                headers["X-CSRFToken"] = body["cookies"]["csrftoken.eu"]
            if "csrftoken.gc1" in body["cookies"]:
                headers["X-CSRFToken"] = body["cookies"]["csrftoken.gc1"]
        extract = {"host": host, "headers": headers, "cookies": cookies }
        return extract