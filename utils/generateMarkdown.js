// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
module.exports.renderLicenseBadge = (license) => {
  switch (license.toLowerCase()) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "isc":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "ibm":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    default:
      return "";
  }
};

// TODO: Create a function to generate markdown for README
module.exports.generateMarkdown = (data, testing = false) => {
  if (!testing) data.badge = this.renderLicenseBadge(data.badge);
  return `
${data.badge}
# ${data.title}
## Description
### ${data.description}
## Installation
### ${data.installation}
## Usage
### ${data.usage}
## Contribution
### ${data.contribution}
## Test
### ${data.test}
## Questsions
- ${data.questions.email}
- [${data.questions.github}](${data.questions.github})
`;
};
