package com.dlong.interview.controllers;

import com.dlong.interview.models.Health;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
  @RequestMapping(value = "/v1/health", method = RequestMethod.GET)
  public Health getHealth() {
    Health health = new Health();

    health.status = "UP";
    health.pageOk = "true";
    health.db = "UP";
    health.logging = "UP";

    return health;
  }
}
