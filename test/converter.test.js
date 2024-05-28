'use strict';

const { convertMarkdown } = require('../src/converter.js');
const { htmlReplacements, ansiReplacements } = require('../src/textReplacements.js');

const { boldTextMd } = require('./res/texts.js');
const { boldTextHtml } = require('./res/texts.js');
const { boldTextAnsi } = require('./res/texts.js');

const { italicTextMd } = require('./res/texts.js');
const { italicTextHtml } = require('./res/texts.js');
const { italicTextAnsi } = require('./res/texts.js');

const { monospacedTextMd } = require('./res/texts.js');
const { monospacedTextHtml } = require('./res/texts.js');
const { monospacedTextAnsi } = require('./res/texts.js');

const { preformattedTextMd } = require('./res/texts.js');
const { preformattedTextHtml } = require('./res/texts.js');
const { preformattedTextAnsi } = require('./res/texts.js');

const { paragraphedTextMd } = require('./res/texts.js');
const { paragraphedTextHtml } = require('./res/texts.js');
const { paragraphedTextAnsi } = require('./res/texts.js');

const { assortedTextMd } = require('./res/texts.js');
const { assortedTextHtml } = require('./res/texts.js');
const { assortedTextAnsi } = require('./res/texts.js');

describe('converter works with html correctly', () => {
  test('properly uses bold tags', () => {
    const html = convertMarkdown(boldTextMd, htmlReplacements);
    expect(html).toBe(boldTextHtml);
  });

  test('properly uses italic tags', () => {
    const html = convertMarkdown(italicTextMd, htmlReplacements);
    expect(html).toBe(italicTextHtml);
  });

  test('properly uses monospaced tags', () => {
    const html = convertMarkdown(monospacedTextMd, htmlReplacements);
    expect(html).toBe(monospacedTextHtml);
  });

  test('properly uses preformatted tags', () => {
    const html = convertMarkdown(preformattedTextMd, htmlReplacements);
    expect(html).toBe(preformattedTextHtml);
  });

  test('properly uses paragraph tags', () => {
    const html = convertMarkdown(paragraphedTextMd, htmlReplacements);
    expect(html).toBe(paragraphedTextHtml);
  });

  test('properly uses assorted tags', () => {
    const html = convertMarkdown(assortedTextMd, htmlReplacements);
    expect(html).toBe(assortedTextHtml);
  });
});

describe('converter works with ansi correctly', () => {
  test('properly uses bold escape codes', () => {
    const ansi = convertMarkdown(boldTextMd, ansiReplacements);
    expect(ansi).toBe(boldTextAnsi);
  });

  test('properly uses italic escape codes', () => {
    const ansi = convertMarkdown(italicTextMd, ansiReplacements);
    expect(ansi).toBe(italicTextAnsi);
  });

  test('properly uses monospaced escape codes', () => {
    const ansi = convertMarkdown(monospacedTextMd, ansiReplacements);
    expect(ansi).toBe(monospacedTextAnsi);
  });

  test('properly uses preformatted escape codes', () => {
    const ansi = convertMarkdown(preformattedTextMd, ansiReplacements);
    expect(ansi).toBe(preformattedTextAnsi);
  });

  test('properly uses paragraphs', () => {
    const ansi = convertMarkdown(paragraphedTextMd, ansiReplacements);
    expect(ansi).toBe(paragraphedTextAnsi);
  });

  test('properly uses assorted escape codes', () => {
    const ansi = convertMarkdown(assortedTextMd, ansiReplacements);
    expect(ansi).toBe(assortedTextAnsi);
  });
});
