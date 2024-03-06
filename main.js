'use strict';

const fs = require('fs');

const replacements = {
  '**': (text) => `<b>${text}</b>`,
  '_': (text) => `<i>${text}</i>`,
  '`': (text) => `<tt>${text}</tt>`,
  '```': (text) => `<pre>\n${text}</pre>\n`
};

function validateMarkdown(markdown) {
  const badFormatting = {};

  const nestedFormatting = [...markdown.matchAll(/(\*\*|_|`)(\*\*|_|`){1,}([^ \r\n]+.*[^ \r\n]+)\1/g)];

  for (const instance of nestedFormatting) {
    const [match] = instance;
    badFormatting[match] = 'Nested formatting is not allowed';
  }

  return badFormatting;
}

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
    )
    .split(/\r?\n\r?\n/).map((paragraph) => `<p>${paragraph}</p>`).join('\n');

  return formattedText;
}

fs.readFile('TextForTest.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const formattingErrors = validateMarkdown(data);
  if (Object.keys(formattingErrors).length > 0) {
    console.error('Error: invalid markdown <details are below>');
    console.error(JSON.stringify(formattingErrors, null, 2));
    process.exit(1);
  }

  console.log(convertMarkdownToHTML(data));
});
