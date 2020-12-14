import requests
from requests.exceptions import HTTPError
import logging
import json

class Req:    

    def _response(self, resp, url="", multi_pages_result=None):
        if resp.status_code == 200:
            if multi_pages_result == None:
                result = resp.json()
            else: 
                result = multi_pages_result
            error = ""
            logging.debug("Response Status Code: %s" % resp.status_code)
        else:
            result = ""
            error = resp.json()
            logging.debug("Response Status Code: %s" % resp.status_code)
            logging.debug("Response: %s" % error)
        return {"result": result, "status_code": resp.status_code, "error": error, "url":url}

    def get(self, url, headers= {}, query={}, page=1, limit=100):
        """GET HTTP Request
        Params: url, HTTP query
        Return: HTTP response"""
        try:
            print(headers)
            print(url)
            headers['Content-Type'] = "application/json"
            html_query = "?"
            if not query == {}:
                for query_param in query:
                    html_query += "%s=%s&" %(query_param, query[query_param])
            if  not "/api/v1/self" in url:
                html_query += "limit=%s&" %limit
                html_query += "page=%s" %page
                url += html_query
            logging.debug("Request > GET %s" % url)
            logging.debug("RequestData > %s" % query)
            logging.debug("RequestHeaders > %s" % headers)
            resp = requests.get(url, headers=headers)
            resp.raise_for_status()
        except HTTPError as http_err:
            logging.error(f'HTTP error occurred: {http_err}')  # Python 3.6
            logging.error(f'HTTP error description: {resp.json()}')
        except Exception as err:
            logging.error(f'Other error occurred: {err}')  # Python 3.6
        else: 
            if "X-Page-Limit" in resp.headers:
                content = resp.json()
                x_page_limit = int(resp.headers["X-Page-Limit"])
                x_page_page = int(resp.headers["X-Page-Page"])
                x_page_total = int(resp.headers["X-Page-Total"])
                if x_page_limit * x_page_page < x_page_total:
                    content+=self.get(url, headers, query, page + 1, limit)["result"]
                return self._response(resp, url, content)
            else:                
                return self._response(resp, url)

    def post(self, url, headers={}, body={}):
        """POST HTTP Request
        Params: url, HTTP body
        Return: HTTP response"""
        try: 
            headers['Content-Type'] = "application/json"
            logging.debug("Request > POST %s" % url)
            logging.debug("RequestData > %s" % body)
            logging.debug("RequestHeaders > %s" % headers)
            if type(body) == str:
                resp = requests.post(url, data=body, headers=headers)
            elif type(body) == dict:
                resp = requests.post(url, json=body, headers=headers)
            else: 
                resp = requests.post(url, json=body, headers=headers)
            resp.raise_for_status()
        except HTTPError as http_err:
            logging.error(f'HTTP error occurred: {http_err}')  # Python 3.6
            logging.error(f'HTTP error description: {resp}')
            return resp
        except Exception as err:
            logging.error(f'Other error occurred: {err}')  # Python 3.6
            return err
        else: 
            return self._response(resp, url)

    def mist_put(self, url, headers={}, body={}):
        """PUT HTTP Request
        Params: url, HTTP body
        Return: HTTP response"""
        try:
            headers['Content-Type'] = "application/json"
            logging.debug("Request > PUT %s" % url)
            logging.debug("RequestData > %s" % body)
            logging.debug("RequestHeaders > %s" % headers)
            if type(body) == str:
                resp = requests.put(url, data=body, headers=headers)
            elif type(body) == dict:
                resp = requests.put(url, json=body, headers=headers)
            else: 
                resp = requests.put(url, json=body, headers=headers)
            resp.raise_for_status()
        except HTTPError as http_err:
            logging.error(f'HTTP error occurred: {http_err}')  # Python 3.6
            logging.error(f'HTTP error description: {resp.json()}')
        except Exception as err:
            logging.error(f'Other error occurred: {err}')  # Python 3.6
        else: 
            return self._response(resp, url)

    def delete(self, url, headers={}):
        """DELETE HTTP Request
        Params: url
        Return: HTTP response"""
        try: 
            headers['Content-Type'] = "application/json"
            logging.debug("Request > DELETE %s" % url)
            logging.debug("RequestHeaders > %s" % headers)
            resp = requests.delete(url, headers=headers)
            resp.raise_for_status()
        except HTTPError as http_err:
            logging.error(f'HTTP error occurred: {http_err}')  # Python 3.6
        except Exception as err:
            logging.error(f'Other error occurred: {err}')  # Python 3.6
        else: 
            return self._response(resp, url)


    # def mist_post_file(self, uri, files=None):
    #     """POST HTTP Request
    #     Params: uri, HTTP body
    #     Return: HTTP response"""
    #     try:                 
    #         url = self._url(uri)
    #         logging.debug("Request > POST %s" % url)
    #         resp = self.session.post(url, files=files)
    #         resp.raise_for_status()
    #     except HTTPError as http_err:
    #         logging.error(f'HTTP error occurred: {http_err}')  # Python 3.6
    #         logging.error(f'HTTP error description: {resp.json()}')
    #         return resp
    #     except Exception as err:
    #         logging.error(f'Other error occurred: {err}')  # Python 3.6
    #     else: 
    #         return self._response(resp, uri)
 