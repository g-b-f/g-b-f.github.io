/**
* Defines the structure for programming language knowledge, including proficiency level and related libraries.
* - `level`: A number from 0 to 10 indicating proficiency in the language.
* - `libraries`: An array of strings listing libraries or frameworks associated with the language.
*/
type LanguageInfo = {
  level: number;
  libraries: string[];
};

export type LanguageTableProps = Record<string, LanguageInfo>;

export const languages: LanguageTableProps = {
  Python: { level: 10, libraries: [
    "pandas", "numpy", "scikit-learn", "matplotlib", "pytest", "flask",
  ] },
  Java: { level: 7, libraries: ["Spring", "mockito", "JUnit", "Maven"] },
  "C/C++": { level: 7, libraries: ["platformio"] },
  Bash: { level: 8, libraries: ["GNU coreutils"] },
  React: { level: 5.5, libraries: ["React Router", "Vite"] },
  SQL: { level: 5, libraries: ["PostgreSQL", "MySQL", "SQLite"] }
};

const descriptions = [
  "no experience",
  "complete beginner",
  "beginner",
  "learner",
  "capable",
  "competent",
  "proficient",
  "skilled",
  "advanced",
  "expert",
  "advanced expert"
]

/**
 * Converts a numeric proficiency level into a descriptive string.
 * @param level - A number from 0 to 10 representing proficiency in a skill or language.
 * @returns A string description corresponding to the given proficiency level.
 * @throws Will throw an error if the level is outside the range of 0 to 10.
 */
export function get_description(level: number): string{
    let level_int = Math.ceil(level)
    if (level_int > 10 || level_int < 0){
      throw new Error("get_description was passed a level out of bounds")
    }
    return descriptions[level_int]
}