Feature: verify bad key
  @api2
  Scenario: verifying bad key
    Given user goes to  BaseUri
  When send a Get request to characters endpoint
  When verify status code 401
  And content type "application/json; charset=utf-8"
  Then verify response status message "Unauthorized"
  Then verify response body says "error" :"API Key Not Found"




#Verify bad key
#1. Send a get request to /characters. Request includes :
#• Header Accept with value application/json
#• Query param key with value invalid
#2. Verify status code 401, content type application/json; charset=utf-8
#3. Verify response status line include message Unauthorized
#4. Verify that response body says "error": "API Key Not Found"