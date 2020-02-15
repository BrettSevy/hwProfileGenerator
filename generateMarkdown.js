

function generateMD(answer) {
  return `#
  * Name: ${answer.name}
  * Email: ${answer.email}
  * Github: https://github.com/${answer.username}
  * Repo title: ${answer.title}
    * Description: ${answer.description}
    * Table of Contents: ${answer.contents}
    * Installation: ${answer.install}
    * Usage: ${answer.usage}
    * License: ${answer.licence}
    * Contributing: ${answer.contributors}
    * Tests: ${answer.tests}
    * Questions: ${answer.questions}
  `;
}

module.exports = generateMD;
