package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                },
        features = "src/test/resources/features",
        glue = "/step_defs",
        dryRun =false,
        tags="@api4"

)

public class CukesRunner {
}
