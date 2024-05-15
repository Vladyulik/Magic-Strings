'use strict';

const fs = require('fs');
const { program } = require('commander');
const { validateMarkdown } = require('./validator.js');
const { convertMarkdown } = require('./converter.js');
const { htmlReplacements, ansiReplacements } = require('./textReplacements.js');

program
  .version('1.0.0')
  .argument('<file>', 'Path to the input Markdown file')
  .option('-o, --output <outputFile>', 'Path to the output HTML file')
  .option('-f, --format <format>', 'Format to which Markdown is converted')
  .parse(process.argv);

const inputFilePath = program.args[0];
const outputFilePath = program.opts().output;
const conversionFormat = program.opts().format || (outputFilePath ? 'html' : 'ansi');

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

  const conversionTable = conversionFormat === 'html' ? htmlReplacements : ansiReplacements;

  const formattedContent = convertMarkdown(data, conversionTable);
  if (outputFilePath) {
    fs.writeFile(outputFilePath, formattedContent, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
    });
  } else console.log(formattedContent);
});
