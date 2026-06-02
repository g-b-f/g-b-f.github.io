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
"### Programming Languages",
"",
"Gabriel's skill with programming languages, relative proficiency, "+
"and associated libraries are as follows:",
]

const languageEntries = Object.entries(languages).sort(([, a], [, b]) => b.level - a.level);

for (const [language, info] of languageEntries) {
  llm_file.push("", `- **${language}**: ${get_description(info.level)}`)
  console.debug(`${language} - ${info.level} - ${get_description(info.level)}`)

  for (const library of info.libraries) {
    llm_file.push(`    - ${library}`)
  }
}

const dir_name = fileURLToPath(import.meta.url)
const split = dir_name.split(path.sep).slice(0, -3)
assert.strictEqual(split.at( - 1), "g-b-f.github.io", "script in wrong place!")
split.push("public", LLM_FILE_NAME)

const output_path = split.join(path.sep)
fs.writeFileSync(output_path, llm_file.join("\n"));
console.log(`saved ${LLM_FILE_NAME} to ${output_path}`)
