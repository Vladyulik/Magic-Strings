'use strict';

function convertMarkdown(markdown, conversionTable) {
  const preformattedBlocks = {};

  const formattedText = markdown
    .replace(/(```\r?\n)([^`]*)\1/g, (match, symbol, content) =>
      conversionTable[symbol.trim()](content)
    )
    .replace(/<pre>\n.*<\/pre>/gs, (match) => {
      const id = `^^PRE^^${Object.keys(preformattedBlocks).length}^^`;
      preformattedBlocks[id] = match;
      return id;
    })
    .replace(/(\*\*|_|`)([^ \r\n]+.*[^ \r\n]+)\1/g, (match, symbol, content) =>
      conversionTable[symbol](content)
    )
    .replace(/\^\^PRE\^\^.+\^\^/g, (match) => preformattedBlocks[match]
    )
    .split(/\r?\n\r?\n/).map((paragraph) => `<p>${paragraph}</p>`).join('\n');

  return formattedText;
}

module.exports = { convertMarkdown };
