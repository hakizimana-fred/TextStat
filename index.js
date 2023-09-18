import { readFileSync } from "fs";
import path from "path";

function main() {
  const args = process.argv.slice(2);
  const [command, argument, file] = args;

  if (
    !command ||
    command !== "ccwc" ||
    argument === "" ||
    !validateArgs(argument) ||
    !file
  ) {
    console.log("something went wrong, make sure you passed required arguments");
    return;
  }

  // read file
  reader(argument, file);
}

function validateArgs(argument) {
  if (argument !== "-c" || argument !== "-l" || argument !== "-w") {
    return false;
  }
  return true;
}

function reader(argument, file) {
  try {
    let bytes, lines, words;
    const data = readFileSync(file, "utf-8");
    const myFile = extractFileName(file);

    switch (argument) {
      case "-c":
        bytes = data.length;
        console.log(bytes, myFile);
        break;
      case "-l":
        lines = data.split("\n");
        lines = lines.length;
        console.log(lines, myFile);
        break;
      case "-w":
        words = data.split(/\s+/).filter(Boolean);
        words = words.length;
        console.log(words, myFile);
        break;
      default:
        console.log("No correct argument was passed, use -c, -l, -w");
        break;
    }
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
