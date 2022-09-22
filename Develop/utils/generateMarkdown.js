// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ----------------------------------------------------------------------

  # ${data.description}

  -----------------------------------------------------------------------

  | Table of Contents                    | Click on each Section to View |
  | ------------------------------       | ----------------------------- |
  | [Installation](##Installation)       | Installation Instructions     |
  | [Usage](##Usage)                     | Usage Information             |
  | [Contribution](##Contributions)      | COntribution Guidelines       |
  | [Test](##Testing)                    | Testing Instructions          |
  | [Contact Me](##Contact Me)           | Testing Instructions          |


  ------------------------------------------------------------------------

  ##Installation
  >${data.installtion}


  ##Usage
  >${data.usage}


  ##Contribution
  >${data.contributions}

  ##Testing
  >${data.testing}


  ##Contact Me

  >[Email](${data.email})
  >[GitHub Profile](github.com/${data.github})



`;
}

module.exports = generateMarkdown;
