

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # Table of Contents
  _________________________________

  - ## [Description](#Description)
  - ## [Installations](#Installations)
  - ## [Usage](#Usage)
  - ## [Credits](#Credits)
  - ## [License](#License)
  - ## [Test](#Test)
  - ## [questions](#Questions)
 

  ## Description
   ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage} 
  ![alt text](assets/images/screenshot.png)

  # Credits
  ${data.credits}

  ## License
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  

  # Questions
  _________________________________

  ## If you have any further questions about this project, you can always contact me here:

  ## Name
  ${data.name}

  ## [Github](https://github.com/${data.githubLink})
  

  ## [Email](${data.email})

`;
}

//generateMardown needed to be export from the index.js to get all the data information from there using exports

module.exports = {generateMarkdown}
