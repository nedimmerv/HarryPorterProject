$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api4.feature");
formatter.feature({
  "name": "verify number of characters",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying lenght of chars",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api4"
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
  "name": "send a Get request to characters",
  "keyword": "When "
});
formatter.match({
  "location": "ApiTest1.send_a_Get_request_to_characters()"
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
  "name": "verify response contains 195 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_response_contains_characters(int)"
});
formatter.result({
  "status": "passed"
});
});