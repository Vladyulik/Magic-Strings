'use strict';

const fs = require('fs');
const { program } = require('commander');

const replacements = {
  '**': (text) => `<b>${text}</b>`,
  '_': (text) => `<i>${text}</i>`,
  '`': (text) => `<tt>${text}</tt>`,
  '```': (text) => `<pre>\n${text}</pre>\n`
};

function validateMarkdown(markdown) {
  const badFormatting = {};

  const nestedFormatting = [...markdown.matchAll(/\b(\*\*|_|`)(\*\*|_|`){1,}([^ \r\n]+.*[^ \r\n]+)\1\b/g)];

  for (const instance of nestedFormatting) {
    const [match] = instance;
    badFormatting[match.trim()] = 'Nested formatting is not allowed';
  }

  const endlessFormatting = [...markdown.matchAll(/\b(\*\*|_|`)[^ *_`\r\n]+(?!.*\1).*\r?\n/g)];

  for (const instance of endlessFormatting) {
    const [match] = instance;
    badFormatting[match.trim()] = 'Endless formatting is not allowed';
  }

  const startlessFormatting = [...markdown.matchAll(/(^|\n)[^(**)(_)(`)]*[^ *_`\r\n](\*\*|_|`)\b/g)];

  for (const instance of startlessFormatting) {
    const [match] = instance;
    badFormatting[match.trim()] = 'Startless formatting is not allowed';
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

program
  .version('1.0.0')
  .argument('<file>', 'Path to the input Markdown file')
  .option('-o, --output <outputFile>', 'Path to the output HTML file')
  .parse(process.argv);

const inputFilePath = program.args[0];
const outputFilePath = program.opts().output;

fs.readFile(inputFilePath, 'utf8', (err, data) => {
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

  const htmlContent = convertMarkdownToHTML(data);
  if (outputFilePath) {
    fs.writeFile(outputFilePath, htmlContent, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
    });
  } else console.log(htmlContent);
});
