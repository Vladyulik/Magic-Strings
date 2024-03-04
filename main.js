'use strict';

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
