# Magic-Strings

## What is it?

A simple program which converts Markdown text to HTML fragments. Currently it supports bold, italic, monospaced and preformatted text as well as paragraphs. The program also has a built-in validator which checks whether the formatting is correct before converting the text.

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

## How to use it?

Once installed, you can use the program as follows:
```shell
node ./app.js <inputFile> [options]
```

### Argument

`<inputFile>`: Specify the path to the input Markdown file you want to convert.

### Options

`-o, --output <outputFile>`: Specify the path to the output HTML file. If not provided, the HTML content will be outputted to the console.

### Examples

Converting a Markdown file named `TextForTest.md` to HTML and outputting the result to console:

```shell
node .\app.js .\TextForTest.md
```

Converting a Markdown file named `TextForTest.md` to HTML and outputting the result to `output.html`:

```shell
node .\app.js .\TextForTest.md -o output.html
```

## Special commits

* [Revert commit](https://github.com/Vladyulik/Magic-Strings/commit/717688f10699577388a6752bfa224db5615130d1)

