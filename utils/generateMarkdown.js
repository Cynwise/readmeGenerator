// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {

  //Destructuring data object
  const {projectTitle, descriptionQuestion, installationQuestion, usageQuestion, licenseQuestion, contributionQuestion, testQuestion, emailQuestion,} = data;

  return `# ${data.projectTitle}

  ## Description
  ${descriptionQuestion}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribution)
  - [Tests](#test)
  - [Questions](#email)
  - [License](#license)

  ## Installation
  ${installationQuestion}

  ## Usage
  ${usageQuestion}

  ## Contribute
  ${contributionQuestion}

  ## Tests
  ${testQuestion}

  ## Questions
  For more information or questions contact me at [${emailQuestion}](mailto:${emailQuestion})
  `;
}

module.exports = generateMarkdown;
