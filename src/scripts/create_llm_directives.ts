import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import assert from "assert";

const LLM_FILE_NAME = "llms.txt"

var llm_file = [
"# Gabriel Birkbeck Frazer's Personal Website",
"",
"> This is Gabriel's website, primarily created as a portfolio, " +
"and to demonstrate his React skills — the website itself was written in React.",
"",
"## Skills"
]

const dir_name = fileURLToPath(import.meta.url)
const split = dir_name.split(path.sep).slice(0, -3)
assert.strictEqual(split[split.length - 1], "g-b-f.github.io", "script in wrong place!")

split.push("public")
split.push(LLM_FILE_NAME)

console.log(split)

function callback (err: any) {
  if (err) throw err
  console.log("saved!")
}

fs.appendFile(split.join(path.sep), llm_file.join("\n"), callback);
