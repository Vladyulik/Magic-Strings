'use strict';

const { convertMarkdown } = require('../src/converter.js');
const { htmlReplacements, ansiReplacements } = require('../src/textReplacements.js');

const boldTextMd = `Hi!
I am **bold**
**Me** too!
**Look at me**
** — just regular symbols`;

const boldTextHtml = `<p>Hi!
I am <b>bold</b>
<b>Me</b> too!
<b>Look at me</b>
** — just regular symbols</p>`;

const boldTextAnsi = `Hi!
I am \x1b[1mbold\x1b[22m
\x1b[1mMe\x1b[22m too!
\x1b[1mLook at me\x1b[22m
** — just regular symbols`;

const italicTextMd = `Hi!
I am _italic_
_Me_ too!
_Look at me_
_ — just a regular symbol`;

const italicTextHtml = `<p>Hi!
I am <i>italic</i>
<i>Me</i> too!
<i>Look at me</i>
_ — just a regular symbol</p>`;

const italicTextAnsi = `Hi!
I am \x1b[3mitalic\x1b[23m
\x1b[3mMe\x1b[23m too!
\x1b[3mLook at me\x1b[23m
_ — just a regular symbol`;

const monospacedTextMd = `Hi!
I am \`monospaced\`
\`Me\` too!
\`Look at me\`
\` — just a regular symbol`;

const monospacedTextHtml = `<p>Hi!
I am <tt>monospaced</tt>
<tt>Me</tt> too!
<tt>Look at me</tt>
\` — just a regular symbol</p>`;

const monospacedTextAnsi = `Hi!
I am \x1b[7mmonospaced\x1b[27m
\x1b[7mMe\x1b[27m too!
\x1b[7mLook at me\x1b[27m
\` — just a regular symbol`;

const preformattedTextMd = `Hi!
\`\`\`
I am **preformatted** text
_Me_ too!
\`Look at me\`
\`\`\`
Bye!`;

const preformattedTextHtml = `<p>Hi!
<pre>
I am **preformatted** text
_Me_ too!
\`Look at me\`
</pre>
Bye!</p>`;

const preformattedTextAnsi = `Hi!
\x1b[7mI am **preformatted** text
_Me_ too!
\`Look at me\`
\x1b[27mBye!`;

const paragraphedTextMd = `Hi!

I am a paragraph :D
And can consist of several lines O:

Me too!`;

const paragraphedTextHtml = `<p>Hi!</p>
<p>I am a paragraph :D
And can consist of several lines O:</p>
<p>Me too!</p>`;

const paragraphedTextAnsi = `Hi!

I am a paragraph :D
And can consist of several lines O:

Me too!`;

const assortedTextMd = `Hi!

I am a **bold** text :D
And I _am italic_ O:
Me? \`I am monospaced\`

\`\`\`
Look **at** me! _I_ \`am\` preformatted!
\`\`\`

And_I am**a regular\`sentence

And here are some edge cases:
**_** **\`**
_**_ _\`_
\`**\` \`_\`

Bye!`;

const assortedTextHtml = `<p>Hi!</p>
<p>I am a <b>bold</b> text :D
And I <i>am italic</i> O:
Me? <tt>I am monospaced</tt></p>
<p><pre>
Look **at** me! _I_ \`am\` preformatted!
</pre></p>
<p>And_I am**a regular\`sentence</p>
<p>And here are some edge cases:
<b>_</b> <b>\`</b>
<i>**</i> <i>\`</i>
<tt>**</tt> <tt>_</tt></p>
<p>Bye!</p>`;

const assortedTextAnsi = `Hi!

I am a \x1b[1mbold\x1b[22m text :D
And I \x1b[3mam italic\x1b[23m O:
Me? \x1b[7mI am monospaced\x1b[27m

\x1b[7mLook **at** me! _I_ \`am\` preformatted!
\x1b[27m
And_I am**a regular\`sentence

And here are some edge cases:
\x1b[1m_\x1b[22m \x1b[1m\`\x1b[22m
\x1b[3m**\x1b[23m \x1b[3m\`\x1b[23m
\x1b[7m**\x1b[27m \x1b[7m_\x1b[27m

Bye!`;

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
