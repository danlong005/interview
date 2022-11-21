from api_request_class import Api
import json


class TestHealthCheck():
    # Test uses api class to get response

    def set_url(self):
        url = 'http://localhost:8080/v1/health'
        api = Api(url=url, method='GET')
        response = api.parsable_response()
        return response

    def test_health_check(self):
        response = self.set_url()
        assert response.status_code == 200

    def test_prop_check(self):
        response = self.set_url()
        json_response = json.loads(response.text)
        assert json_response['status'] == 'UP'
        assert json_response['pageOk'] == 'true'
        assert json_response['db'] == 'UP'
        assert json_response['logging'] == 'UP'