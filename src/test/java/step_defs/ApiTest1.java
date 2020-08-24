package step_defs;

import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.baseURI;


public class ApiTest1 {
    static Response response;

    @Given("user goes to  BaseUri")
    public void user_goes_to_BaseUri() {
    baseURI= ConfigurationReader.get("harryptr.uri");


    }

    @When("user sends a Get request")
    public void user_sends_a_Get_request() {
         response = RestAssured.given().get("/v1/sortingHat");

    }

    @Then("verify status code {int}")
    public void verify_status_code(int  s_Code) {
    int res_code=response.getStatusCode();
        Assert.assertEquals(s_Code,res_code);
        System.out.println("s_Code = " + s_Code);
        System.out.println("res_code = " + res_code);
    }

    @Then("verify that the contentType is {string}")
    public void verify_that_the_contentType_is(String str) {
        String con_type=response.getContentType();
        Assert.assertEquals(str,con_type);
        System.out.println("str = " + str);
        System.out.println("con_type = " + con_type);


    }

    @Then("body contains  one of")
    public void body_contains_one_of(List< String> list) {
        System.out.println("list.toString() = " + list.toString());
        Assert.assertTrue(list.contains(response.asString()));

    }
    @When("send a Get request to characters endpoint without key")
    public void send_a_Get_request_to_characters_endpoint_without_key() {
        response = RestAssured.given().accept(ContentType.JSON).get("/v1/characters");
    }
    @Given("send a Get request to characters endpoint")
    public void send_a_Get_request_to_characters_endpoint() {
        response = RestAssured.given().accept(ContentType.JSON).
                queryParam("key",
                        "$2a$10$u4.U/L35M5SSDRxAzGnByu1HvtxR0LyeOruKktfl2A.0RPDv8geD6...")
                .get("/v1/characters");

    }

    @When("content type {string}")
    public void content_type(String str) {
      String content_type=  response.getContentType();
      Assert.assertEquals(str,content_type);
        System.out.println("str = " + str);
        System.out.println("content_type = " + content_type);

    }

    @Then("verify response status message {string}")
    public void verify_response_status_message(String str) {
      Assert.assertTrue(  response.statusLine().contains(str));

    }

    @Then("verify response body says {string} :{string}")
    public void verify_response_body_says(String s1, String s2) {
        Assert.assertEquals(response.body().path(s1),s2);
        System.out.println("s1 = " + response.body().path(s1));
        System.out.println("s2 = " + s2);

    }
    @When("send a Get request to characters")
    public void send_a_Get_request_to_characters() {
         response = RestAssured.given().accept(ContentType.JSON).
                queryParam("key",
                        "$2a$10$u4.U/L35M5SSDRxAzGnByu1HvtxR0LyeOruKktfl2A.0RPDv8geD6")
                .get("v1/characters");
       // System.out.println("response = " + response.prettyPrint());
        Assert.assertEquals(response.statusCode(),200);
        Assert.assertEquals(response.contentType(),"application/json; charset=utf-8");

    }

    @Then("verify response contains {int} characters")
    public void verify_response_contains_characters(int numOfChars) {

        List< Object> listCharacters = response.body().path("name");
        System.out.println(listCharacters.size());
        Assert.assertEquals(numOfChars,listCharacters.size());
        System.out.println("listCharacters = " + listCharacters);
        for (Object listCharacter : listCharacters) {
            System.out.println("listCharacters = " + listCharacter);
        }

    }
}
