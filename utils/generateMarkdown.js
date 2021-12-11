

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}

  ## Table of Contents
  ${data.header}

  ## Installation
  ${data.installation}

`;
}


module.exports = generateMarkdown (data);
