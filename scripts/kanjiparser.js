"use strict";
/**
 * Nodejs script to parse hiragana/katakana/kanji csv files to json
 */
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var yargs = require("yargs");
// const parse = require('csv-parse');
var parse = require("csv-parse");
var argv = yargs
    .command("rh", "parse [romanji, hiragana] deck")
    .command("rk", "parse [romanji, katakana] deck")
    .command("hk", "parse [hiragana, katakana] deck")
    .command("all", "parse all decks").argv;
console.log(argv._);
var DeckParser = /** @class */ (function () {
    function DeckParser() {
        this.csvPath = "./decks_csv";
        this.files = {
            monographs: "flashcard decks - Monographs.csv"
        };
    }
    DeckParser.prototype.parseRomanjiHiragana = function () {
        var fileName = path.join(this.csvPath, this.files.monographs);
        console.log(fileName);
        var buffer = [];
        fs.createReadStream(fileName)
            .pipe(parse({ delimiter: ",", columns: true }))
            .on("data", function (row) {
            buffer.push(row);
        })
            .on("end", function () {
            console.log(buffer);
        });
    };
    return DeckParser;
}());
var parser = new DeckParser();
if (argv._.length === 0) {
    yargs.showHelp();
}
if (argv._.includes("rh") || argv._.includes("all")) {
    parser.parseRomanjiHiragana();
}
