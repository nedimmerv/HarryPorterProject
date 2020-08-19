$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api1.feature");
formatter.feature({
  "name": "verify sorting hat",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "sorting hat",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "user goes to  BaseUri",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiTest1.user_goes_to_BaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends a Get request",
  "keyword": "When "
});
formatter.match({
  "location": "ApiTest1.user_sends_a_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that the contentType is \"application/json; charset\u003dutf-8\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_that_the_contentType_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body contains  one of",
  "rows": [
    {
      "cells": [
        "\"Gryffindor\"",
        "\"Ravenclaw\"",
        "\"Slytherin\"",
        "\"Hufflepuff\""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.body_contains_one_of(String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat step_defs.ApiTest1.body_contains_one_of(ApiTest1.java:52)\r\n\tat ✽.body contains  one of(file:src/test/resources/features/api1.feature:8)\r\n",
  "status": "failed"
});
});