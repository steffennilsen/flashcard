/**
 * Nodejs script to parse hiragana/katakana/kanji csv files to json
 */

const fs = require("fs");
const path = require("path");
const yargs = require("yargs");
// const parse = require('csv-parse');
import * as parse from "csv-parse";

const argv = yargs
  .command("rh", "parse [romanji, hiragana] deck")
  .command("rk", "parse [romanji, katakana] deck")
  .command("hk", "parse [hiragana, katakana] deck")
  .command("all", "parse all decks").argv;

console.log(argv._);

class DeckParser {
  private csvPath = "./decks_csv";
  private files = {
    monographs: "flashcard decks - Monographs.csv",
  };

  parseRomanjiHiragana() {
    const fileName = path.join(this.csvPath, this.files.monographs);
    console.log(fileName);
    const buffer: string[] = [];

    fs.createReadStream(fileName)
      .pipe(parse({ delimiter: ",", columns: true }))
      .on("data", (row: string) => {
        buffer.push(row);
      })
      .on("end", () => {
        console.log(buffer);
      });
  }
}

const parser = new DeckParser();

if (argv._.length === 0) {
  yargs.showHelp();
}

if (argv._.includes("rh") || argv._.includes("all")) {
  parser.parseRomanjiHiragana();
}
