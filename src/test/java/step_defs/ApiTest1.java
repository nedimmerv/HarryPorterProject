package step_defs;

import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.baseURI;


public class ApiTest1 {
    Response response;

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
    }
