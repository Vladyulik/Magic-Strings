# Magic-Strings

## What is it?

A simple program which converts Markdown text to ANSI/HTML fragments. Currently it supports bold, italic, monospaced and preformatted text as well as paragraphs. The program also has a built-in validator which checks whether the formatting is correct before converting the text.

## How to install it?

1. Ensure that you have [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed
2. Clone the repository to your local machine:
```shell
git clone https://github.com/Vladyulik/Magic-Strings.git
```
3. Navigate to the project directory:
```shell
cd Magic-Strings
```
4. Install dependencies:
```shell
npm install
```

## How to test it?

To run tests, you can use the following command:

```shell
npm run test
```

And if you want a detailed output, you can use this:

```shell
npm run test:dev
```

## How to use it?

Once installed, you can use the program as follows:

```shell
node ./app.js <inputFile> [options]
```

### Argument

`<inputFile>`: Specify the path to the input Markdown file you want to convert.

### Options

`-o, --output <outputFile>`: Specify the path to the output file. If not provided, the content will be outputted to the console.

`-f, --format <format>`: Specify the format to which Markdown is converted. If not provided, the content will be outputted in ANSI.

### Examples

Converting a Markdown file named `TextForTest.md` to ANSI and outputting the result to console:

```shell
node .\app.js .\TextForTest.md
```

or

```shell
node .\app.js .\TextForTest.md -f ansi
```

Converting a Markdown file named `TextForTest.md` to HTML and outputting the result to console:

```shell
node .\app.js .\TextForTest.md -f html
```

Converting a Markdown file named `TextForTest.md` to HTML and outputting the result to `output.html`:

```shell
node .\app.js .\TextForTest.md -o output.html -f html
```

## Special commits

* [Revert commit](https://github.com/Vladyulik/Magic-Strings/commit/717688f10699577388a6752bfa224db5615130d1)

* [Failed tests commit](https://github.com/Vladyulik/Magic-Strings/commit/2ef3d95fcf839a504ac61533c4c62e19bee61291)

## Conclusion

Since the program has 2 different options for output, 4 various symbols for formatting and several other converting features, there is a huge amount of possible combinations which can occur in the process of app’s usage. Therefore unit-tests played an essential role in the development.

Firstly, they made me separate my app into smaller components, which made everything easier to understand. Secondly, they helped me discover new edge cases which I have never thought of. And thirdly, using them together with CI helped me automatically make sure that my program works for all the cases. This saved me a lot of time and boosted my productivity at least 2x

Speaking about my general experience, I have used test-driven development for one of my previous courseworks. It was quite unusual at first, but in the end, it played out really well. Thanks to it, I managed to get a clear vision of my program at the very start of the developing process, which helped me minimize the amount of significant changes made in app's logic throughout its creation.
