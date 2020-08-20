$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api2.feature");
formatter.feature({
  "name": "verify bad key",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying bad key",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api2"
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
  "name": "send a Get request to characters endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "ApiTest1.send_a_Get_request_to_characters_endpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code 401",
  "keyword": "When "
});
formatter.match({
  "location": "ApiTest1.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content type \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "ApiTest1.content_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response status message \"Unauthorized\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_response_status_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body says \"error\" :\"API Key Not Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_response_body_says(String,String)"
});
formatter.result({
  "status": "passed"
});
});