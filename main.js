'use strict';

const fs = require('fs');

function convertMarkdownToHTML(markdown) {
  const formattedText = markdown
    .replace(/(```\n)([^`]*)\1/g, (match, symbol, content) => content)
    .replace(/(\*\*|_|`)([^ \n]+.*[^ \n]+)\1/g, (match, symbol, content) => content);

  return formattedText;
}

fs.readFile('TextForTest.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log(convertMarkdownToHTML(data));
});
