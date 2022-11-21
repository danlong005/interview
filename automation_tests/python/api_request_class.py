import requests
import json


class Api:
    # Class for making api requests
        def __init__(self, url, method, token=None, body=None):
            self.url = url
            self.method = method
            self.body = body
            self.token = token
            self.headers = {'Content-Type': 'application/json'}


        def parsable_response(self):
            # Gets requests, stringify it, turn it into python object
            response = requests.request(url=self.url, method=self.method, headers=self.headers)

            return response