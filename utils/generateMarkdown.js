

function generateMD(answers) {
  return `#
  * Name: ${answers.name}
  * Email: ${answers.email}
  * Username: ${answers.username}
  * GitHub link: ${answers.url}
  * Image URL: ${answers.avatar_url}
  * Repo title: ${answers.title}
  * Description: ${answers.description}
    * Table of Contents: ${answers.contents}
    * Installation: ${answers.install}
    * Usage: ${answers.usage}
    * License: ${answers.licence}
    * Contributing: ${answers.contributors}
    * Tests: ${answers.tests}
    * Questions: ${answers.questions}
  `;
}

module.exports = generateMD;
