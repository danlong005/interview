from api_request_class import Api


class TestPropCheck:
    # Test uses api class to get response

    def test_health_check(self):
        url = 'http://localhost:8080/v1/health'
        api = Api(url=url, method='GET')
        response = api.parsable_response()