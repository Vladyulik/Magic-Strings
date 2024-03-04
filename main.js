'use strict';

const fs = require('fs');

function convertMarkdownToHTML(markdown) {
  let html = '';
  const lines = markdown.split('\n');

  for (const line of lines) {
    html += line
      .replace(/(\*\*|_|`)([^ \n]+.*[^ \n]+)\1/g, (match, symbol, content) => content)
      .replace(/(```\n)([.\n]*)\1/g, (match, symbol, content) => content);
    html += '\n';
  }

  return html;
}

fs.readFile('TextForTest.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log(convertMarkdownToHTML(data));
});
