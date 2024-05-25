'use strict';

const { validateMarkdown } = require('../src/validator.js');

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

describe('validator works correctly', () => {
  test('properly detects nested formatting', () => {
    const errorStorage = validateMarkdown(nestedFormattingText);
    const errorKeys = Object.keys(errorStorage);
    const errorValues = Object.values(errorStorage);
    const errorMessage = 'Nested formatting is not allowed';

    expect(errorKeys.length).toBe(7);
    expect(errorValues.every((v) => v === errorMessage)).toBe(true);
    expect(errorKeys.includes('**_nested formatting_**')).toBe(true);
    expect(errorKeys.includes('**`too`**')).toBe(true);
    expect(errorKeys.includes('_**me**_')).toBe(true);
    expect(errorKeys.includes('_`Same`_')).toBe(true);
    expect(errorKeys.includes('`**are lots of**`')).toBe(true);
    expect(errorKeys.includes('`_True_`')).toBe(true);
    expect(errorKeys.includes('**`_Look at me!_`**')).toBe(true);
  });

  test('properly detects endless formatting', () => {
    const errorStorage = validateMarkdown(endlessFormattingText);
    const errorKeys = Object.keys(errorStorage);
    const errorValues = Object.values(errorStorage);
    const errorMessage = 'Endless formatting is not allowed';

    expect(errorKeys.length).toBe(3);
    expect(errorValues.every((v) => v === errorMessage)).toBe(true);
    expect(errorKeys.includes('**endless formatting :D')).toBe(true);
    expect(errorKeys.includes('`too !')).toBe(true);
    expect(errorKeys.includes('_me ...')).toBe(true);
  });

  test('properly detects startless formatting', () => {
    const errorStorage = validateMarkdown(startlessFormattingText);
    const errorKeys = Object.keys(errorStorage);
    const errorValues = Object.values(errorStorage);
    const errorMessage = 'Startless formatting is not allowed';

    expect(errorKeys.length).toBe(4);
    expect(errorValues.every((v) => v === errorMessage)).toBe(true);
    expect(errorKeys.includes('Surprise_')).toBe(true);
    expect(errorKeys.includes('I am startless**')).toBe(true);
    expect(errorKeys.includes('Me`')).toBe(true);
    expect(errorKeys.includes('And me_')).toBe(true);
  });

  test('does not give errors if text is correct', () => {
    const errorStorage = validateMarkdown(correctText);
    const errorKeys = Object.keys(errorStorage);
    expect(errorKeys.length).toBe(0);
  });
});
