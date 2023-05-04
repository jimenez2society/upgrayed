const { generateMarkdown, renderLicenseBadge } = require("./generateMarkdown");

describe("renderLicenseBadge", () => {
  it("Should render a licesne badge depending on the string passed in the parameter", () => {
    expect(renderLicenseBadge("mit")).toEqual(
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    );
    expect(renderLicenseBadge("isc")).toEqual(
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    );
    expect(renderLicenseBadge("mozilla")).toEqual(
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    );
    expect(renderLicenseBadge("ibm")).toEqual(
      "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    );
  });
});
describe("generateMarkdown", () => {
  it("should render a markdown file with the data that is passed", () => {
    // expect badge to be rendered
    let data = {};
    data.title = "Test Title";
    data.badge = renderLicenseBadge("mit");
    data.description = "This is a test description for test purposes only.";
    data.installation = "This is where installation instructions will go";
    data.usage = "This is where the usage guide will go";
    data.contribution = "This will explain how to contribute";
    data.test = "This shows what kind of test are being done (unit)";
    data.questions = {
      email: "testemail@test.com",
      github: "https://www.testgithub/github.com",
    };
    expect(generateMarkdown(data, true)).toEqual(`
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Test Title
# Description
This is a test description for test purposes only.
# Installation
This is where installation instructions will go
# Usage
This is where the usage guide will go
# Contribution
This will explain how to contribute
# Test
This shows what kind of test are being done (unit)
# Questsions
- testemail@test.com
- [https://www.testgithub/github.com](https://www.testgithub/github.com)
`);
  });
});
