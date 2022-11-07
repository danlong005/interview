package com.dlong.interview;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

@SpringBootTest
class InterviewApplicationTests {
  @Test
  void contextLoads() throws IOException {
    URL url = new URL("http://localhost:8080/v1/health");
    HttpURLConnection connection = (HttpURLConnection)url.openConnection();
    connection.setRequestMethod("GET");
    connection.connect();

    int code = connection.getResponseCode();
    String actualResponseMessage = connection.getREsponse();

    int expectedResponseCode = 200;

    // testing the response code
    assert code==expectedResponseCode;

    System.out.println(actualResponseMessage);

    connection.disconnect();
  }
}
