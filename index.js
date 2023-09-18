import { readFileSync } from "fs";

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
    console.log(data);
  } catch (e) {}
}

main();
