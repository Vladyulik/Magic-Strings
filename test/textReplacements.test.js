'use strict';

const { htmlReplacements, ansiReplacements } = require('../src/textReplacements.js');

describe('html conversion table works correctly', () => {
  test('properly converts bold text', () => {
    const text = 'bold text';
    const symbol = '**';
    const html = htmlReplacements[symbol](text);
    expect(html).toBe('<b>bold text</b>');
  });

  test('properly converts italic text', () => {
    const text = 'italic text';
    const symbol = '_';
    const html = htmlReplacements[symbol](text);
    expect(html).toBe('<i>italic text</i>');
  });

  test('properly converts monospaced text', () => {
    const text = 'monospaced text';
    const symbol = '`';
    const html = htmlReplacements[symbol](text);
    expect(html).toBe('<tt>monospaced text</tt>');
  });

  test('properly converts preformatted text', () => {
    const text = 'preformatted text';
    const symbol = '```';
    const html = htmlReplacements[symbol](text);
    expect(html).toBe('<pre>\npreformatted text</pre>\n');
  });
});

describe('ansi conversion table works correctly', () => {
  test('properly converts bold text', () => {
    const text = 'bold text';
    const symbol = '**';
    const ansi = ansiReplacements[symbol](text);
    expect(ansi).toBe('\x1b[1mbold text\x1b[22m');
  });

  test('properly converts italic text', () => {
    const text = 'italic text';
    const symbol = '_';
    const ansi = ansiReplacements[symbol](text);
    expect(ansi).toBe('\x1b[3mitalic text\x1b[23m');
  });

  test('properly converts monospaced text', () => {
    const text = 'monospaced text';
    const symbol = '`';
    const ansi = ansiReplacements[symbol](text);
    expect(ansi).toBe('\x1b[7mmonospaced text\x1b[27m');
  });

  test('properly converts preformatted text', () => {
    const text = 'preformatted text';
    const symbol = '```';
    const ansi = ansiReplacements[symbol](text);
    expect(ansi).toBe('\x1b[7mpreformatted text\x1b[27m');
  });
});
