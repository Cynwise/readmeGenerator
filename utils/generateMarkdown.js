function renderLicenseBadge(license) {

  // getting badge from shields.io
  const licenseTypes = {'MIT License': 'MIT', 'The Unlicense': 'Unlicense','GPL License': 'GPL', 'Apache2.0 License': 'Apache2.0'}
  return `https://img.shields.io/badge/license-${licenseTypes[license]}-green`
}

function generateMarkdown(data) {

  //Destructuring data object
  const {projectTitle, descriptionQuestion, installationQuestion, usageQuestion, licenseQuestion, contributionQuestion, testQuestion, emailQuestion, githubQuestion} = data;

  // generating markdown file and rendering software license
  return `# ${projectTitle}
  
  ![Badge](${renderLicenseBadge(licenseQuestion)})

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

  For more information or questions contact me at [${emailQuestion}](mailto:${emailQuestion}) or (https://github.com/${githubQuestion})

## License

  The project is covered under ${licenseQuestion}
  `;
}

module.exports = generateMarkdown;
