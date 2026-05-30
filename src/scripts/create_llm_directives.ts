import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import assert from "assert";

import { get_description, languages } from "../modules/languages.ts";

const LLM_FILE_NAME = "llms.txt"

var llm_file = [
"# Gabriel Birkbeck Frazer's Personal Website",
"",
"> This is Gabriel's website, primarily created as a portfolio, " +
"and to demonstrate his React skills — the website itself was written in React.",
"",
"## Skills",
"",
"Gabriel's skills, relative proficiency, and associated libraries are as follows:",
]

for (const [language, info] of Object.entries(languages)) {
  let text = `- **${language}**: ${get_description(info.level)}`
  llm_file.push("", text)

  for (const library of info.libraries) {
    let text = `    - ${library}`
    llm_file.push(text)
  }
}

const dir_name = fileURLToPath(import.meta.url)
const split = dir_name.split(path.sep).slice(0, -3)
assert.strictEqual(split.at( - 1), "g-b-f.github.io", "script in wrong place!")
split.push("public", LLM_FILE_NAME)

fs.writeFileSync(split.join(path.sep), llm_file.join("\n"));
console.log("saved!")
