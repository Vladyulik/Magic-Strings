'use strict';

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

const nestedFormattingText = `Hello!
I am **_nested formatting_** :D
Me **\`too\`** !
And _**me**_ !
_\`Same\`_ ...
There \`**are lots of**\` us 0_0
\`_True_\`
Wait, **\`_Look at me!_\`**
`;

const endlessFormattingText = `Hi!
I am **endless formatting :D
Me \`too !
And _me ...
`;

const startlessFormattingText = `Surprise_ !
I am startless** formatting :D
Me\` too !
And me_ ...
`;

const correctText = `Wow!
**bold** _italic_ \`monospaced\`
_ ** \` — just regular symbols
**_** is ok
_**_ is also ok
and this is \`**\` ok
\`\`\`
Preformatted text **He He**
\`\`\`
`;

module.exports = {
  boldTextMd,
  boldTextHtml,
  boldTextAnsi,
  italicTextMd,
  italicTextHtml,
  italicTextAnsi,
  monospacedTextMd,
  monospacedTextHtml,
  monospacedTextAnsi,
  preformattedTextMd,
  preformattedTextHtml,
  preformattedTextAnsi,
  paragraphedTextMd,
  paragraphedTextHtml,
  paragraphedTextAnsi,
  assortedTextMd,
  assortedTextHtml,
  assortedTextAnsi,
  nestedFormattingText,
  endlessFormattingText,
  startlessFormattingText,
  correctText
};
