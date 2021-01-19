// FUNCTION TO CREATE README FILE
function generateMarkdown(data){
    return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [Contributions](#Contributions)
    4. [Tests](#Tests)
    5. [License](#License)
    6. [Questions](#Questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contributions}

    ## Tests
    ${data.test}

    ## License
    ${data.license}
    ![License Badge](https://img.shields.io/badge/License-${data.license}-green)

    ## Questions
    * If you have any questions regarding this project, please email me at: ${data.email}
    * GitHub Profile: https://github.com/${data.username}

    `;
}

module.exports = generateMarkdown;
