Feature: verify number of chars id and house
  Scenario: verifying id and houses


  #Verify number of character id and house
    # 1.Send a get request to /characters.
      # Request includes :
        # •Header Accept with value application/json•Query param key with value {{apiKey}}
          # 2.Verify status code 200, content type application/json; charset=utf-8
            # 3.Verify all characters in the response have id field which is not empty
              # 4.Verify that value type of the field dumbledoresArmy is a boolean in all characters in the response
                # 5.Verify value of the house in all characters in the response is one of the following:
                  # "Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"