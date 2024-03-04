'use strict';

function convertMarkdownToHTML(markdown) {
  let html = '';
  const lines = markdown.split('\n');

  for (const line of lines) {
    html += `${line}\n`;
  }

  return html;
}

const markdownText = `
**bold** _italic_ \`monospaced\`

\`\`\`
Preformatted text **He He**
\`\`\`

Paragraph1. Lorem Ipsum Dolor Sit Amet.
This is still paragraph 1.

And after a blank line this is paragraph 2.
`;

console.log(convertMarkdownToHTML(markdownText));
