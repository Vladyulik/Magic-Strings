'use strict';

const htmlReplacements = {
  type: 'html',
  '**': (text) => `<b>${text}</b>`,
  '_': (text) => `<i>${text}</i>`,
  '`': (text) => `<tt>${text}</tt>`,
  '```': (text) => `<pre>\n${text}</pre>\n`
};

const ansiReplacements = {
  type: 'ansi',
  '**': (text) => `\x1b[1m${text}\x1b[22m`,
  '_': (text) => `\x1b[3m${text}\x1b[23m`,
  '`': (text) => `\x1b[7m${text}\x1b[27m`,
  '```': (text) => `\x1b[7m${text}\x1b[27m`
};

module.exports = {
  htmlReplacements,
  ansiReplacements
};
