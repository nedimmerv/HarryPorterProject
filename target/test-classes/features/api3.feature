Feature: verify no key
  @api3
  Scenario: verifying no Key
  Given user goes to  BaseUri
  When send a Get request to characters endpoint without key
  Then verify status code 409
  Then verify that the contentType is "application/json; charset=utf-8"
  Then verify response status message "Conflict"
  Then verify response body says "error" :"Must pass API key for request"






#Verify no key
#1. Send a get request to /characters. Request includes :
#• Header Accept with value application/json
#2. Verify status code 409, content type application/json; charset=utf-8
#3. Verify response status line include message Conflict
#4. Verify that response body says "error": "Must pass API key for request"