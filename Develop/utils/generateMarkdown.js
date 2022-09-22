// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";
  } else if (license === "GPLv2"){
    return "https://img.shields.io/badge/License-GPL_v2-blue.svg";
  } else if (license === "Apache"){
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license === "GPLv3"){
    return "(https://img.shields.io/badge/License-AGPL_v3-blue.svg";
  } else if (license === "BSD 3-clause"){
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
  } else {
    return ""; 
  }
}; 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GPLv2"){
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (license === "Apache"){
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPLv3"){
    return "(https://www.gnu.org/licenses/agpl-3.0";
  } else if (license === "BSD 3-clause"){
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return ""; 
  }
}; 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ----------------------------------------------------------------------

  # ${data.description}
  # ![License](renderLicenseBadge(${data.license})

  -----------------------------------------------------------------------

  | Table of Contents-Click to View      | Details                       |
  | ------------------------------       | ----------------------------- |
  | [Installation](#Installation)        | Installation Instructions     |
  | [Usage](#Usage)                      | Usage Information             |
  | [Contribution](#Contributions)       | Contribution Guidelines       |
  | [Test](#Testing)                     | Testing Instructions          |
  | [Contact Me](#Contact-Me)            | GitHub and E-mail Links       |
  | [License Link](#License)             | Information of License        |

  ------------------------------------------------------------------------

  ##Installation
  >${data.installation}


  ##Usage
  >${data.usage}


  ##Contribution
  >${data.contributions}

  ##Testing
  >${data.test}


  ##Contact Me

  >[Email](${data.email})
  >[GitHub Profile](github.com/${data.github})



`;
}

module.exports = generateMarkdown;
