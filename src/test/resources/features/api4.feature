Feature: verify number of characters
  @api4
  Scenario: verifying lenght of chars
  Given user goes to  BaseUri
  When send a Get request to characters
  Then verify status code 200
  Then verify that the contentType is "application/json; charset=utf-8"
  Then verify response contains 195 characters




#Verify number of characters
#1.Send a get request to /characters. Request includes :
#•Header Accept with value application/json
# •Query param key with value {{apiKey}}
#2.Verify status code 200, content type application/json; charset=utf-8
#3.Verify response contains 194 characters