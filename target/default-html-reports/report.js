$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/api3.feature");
formatter.feature({
  "name": "verify no key",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying no Key",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api3"
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
  "name": "send a Get request to characters endpoint without key",
  "keyword": "When "
});
formatter.match({
  "location": "ApiTest1.send_a_Get_request_to_characters_endpoint_without_key()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify status code 409",
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
  "name": "verify response status message \"Conflict\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_response_status_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify response body says \"error\" :\"Must pass API key for request\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiTest1.verify_response_body_says(String,String)"
});
formatter.result({
  "status": "passed"
});
});