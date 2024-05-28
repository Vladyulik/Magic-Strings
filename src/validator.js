'use strict';

function validateMarkdown(markdown) {
  const badFormatting = {};

  const nestedFormatting = [...markdown.matchAll(/\s(\*\*|_|`)(\*\*|_|`){1,}([^ \r\n]+.*[^ \r\n]+)\1\s/g)];

  for (const instance of nestedFormatting) {
    const [match] = instance;
    badFormatting[match.trim()] = 'Nested formatting is not allowed';
  }

  const endlessFormatting = [...markdown.matchAll(/\s(\*\*|_|`)[^ *_`\r\n]+(?!.*\1).*\r?\n/g)];

  for (const instance of endlessFormatting) {
    const [match] = instance;
    badFormatting[match.trim()] = 'Endless formatting is not allowed';
  }

  const startlessFormatting = [...markdown.matchAll(/(^|\n)[^(**)(_)(`)]*[^ *_`\r\n](\*\*|_|`)\s/g)];

  for (const instance of startlessFormatting) {
    const [match] = instance;
    badFormatting[match.trim()] = 'Startless formatting is not allowed';
  }

  return badFormatting;
}

module.exports = { validateMarkdown };
