import { readFileSync } from "fs";
import path from "path";

function main() {
  // get args
  const args = process.argv.slice(2);
  const [command, file] = args;

  if (!command || command !== "ccwc" || !file) {
    console.log("something went wrong");
    return;
  }

  // read file
  reader(file);
}

function reader(file) {
  try {
    const data = readFileSync(file, "utf-8");
    const lines = data.split("\n");
    const numLines = lines.length;
    const words = data.split(/\s+/).filter(Boolean);
    const numWords = words.length;
    const numChars = data.length;

    const myFile = extractFileName(file); // check if file includes path
    const output = `${numLines} ${numWords} ${numChars} ${myFile}`;

    console.log(output);
  } catch (e) {}
}

function extractFileName(pathToFile) {
  if (pathToFile.includes("/")) {
    const fileName = path.basename(pathToFile);
    return fileName;
  }
  return pathToFile;
}

main();
