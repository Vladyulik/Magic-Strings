'use strict';

const fs = require('fs');

const replacements = {
  '**': (text) => `<b>${text}</b>`,
  '_': (text) => `<i>${text}</i>`,
  '`': (text) => `<tt>${text}</tt>`,
  '```': (text) => `<pre>\n${text}</pre>\n`
};

function convertMarkdownToHTML(markdown) {
  const preformattedBlocks = {};

  const formattedText = markdown
    .replace(/(```\r?\n)([^`]*)\1/g, (match, symbol, content) =>
      replacements[symbol.trim()](content)
    )
    .replace(/<pre>\n.*<\/pre>/gs, (match) => {
      const id = `^^PRE^^${Object.keys(preformattedBlocks).length}^^`;
      preformattedBlocks[id] = match;
      return id;
    })
    .replace(/(\*\*|_|`)([^ \r\n]+.*[^ \r\n]+)\1/g, (match, symbol, content) =>
      replacements[symbol](content)
    )
    .replace(/\^\^PRE\^\^.+\^\^/g, (match) => preformattedBlocks[match]
    );

  return formattedText;
}

fs.readFile('TextForTest.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log(convertMarkdownToHTML(data));
});
