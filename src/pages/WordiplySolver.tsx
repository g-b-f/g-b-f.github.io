import { useState, useRef, type ChangeEvent, type ReactElement} from 'react';
import { Stopwatch } from '../utils/Misc.tsx'
const fileUrl = "/assets/words.txt";

export default function WordiplySolver() {
  const [word, setWord] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');
  const [result, setResult] = useState<string[]>([]);
  const wordList = useRef<string[] | null>(null);

  const err = (e:string) => {throw new Error(e + '!')};

  if (wordList.current === null){
    console.debug("fetching word list")
    get_word_list().then((list) => {wordList.current = list}).catch((e) => {
      console.error("Error fetching word list: " + e);
      err("Failed to load word list");
    });
  }

  async function get_word_list(): Promise<string[]>{
      const stopwatch = new Stopwatch()
      const response = (await fetch(fileUrl))
      if (!response.ok) err("Internal word list not found");
      const text = await response.text();
      const word_list = text.split("\n");
      console.debug(
        "got word list. character count: " + text.length +
        " word count: " + word_list.length +
        " took: " + stopwatch.time_taken + " ms"
      );
      return word_list;
  }

  function get_matching_words(match_str: string, list: string[]): string[]{
    console.debug("getting matching words for " + match_str)
    const matching_words: string[] = [];
    for (const candidate of list){
      if (candidate.includes(match_str)){
        matching_words.push(candidate);
      }
    }
    console.log("got " + matching_words.length + " matching words for " + match_str)
    matching_words.sort((a, b) => b.length - a.length);
    return matching_words;
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>){
    console.debug("handling submit")
    const stopwatch = new Stopwatch()

    event.preventDefault();
    setStatus('submitting');

    try {
      const answer = word.toLowerCase()
      if (! /^[A-Za-z]+$/.test(answer)){
        err("Must be letters only");
      }
      else if (answer.length <2 ){
        err("Too few letters");
      }
      else if (answer.length >9 ){
        err("Too many letters");
      }
    
      console.debug("validated input, fetching word list")
      const list = wordList.current ?? await get_word_list();
      setResult(get_matching_words(answer, list));
    }

    catch (er: any) {
      setStatus('typing');
      setError(er);
      console.error(er)
      return
    }
    setStatus('success');
    setError(null);
    stopwatch.log("handled submit in: ")
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value);
  
  function get_result_text(): ReactElement {
    if (status === 'typing') return <></>;
    if (status === 'submitting') return <p>Fetching results...</p>;
    if (status === 'success') {
      if (result.length === 0) return <p>No matching words found.</p>;

      return (<>
        <section className="wordiply-result">
          <h3>Matches</h3>
            <table><tbody>
              {
                result.map((res) => (
                  <tr key={res}>
                    <td>{res.length}</td>
                    <td>{res}</td>
                  </tr>
                ))
              }
            </tbody></table>
        </section>
      </>)
    }
    throw new Error("Invalid status: " + status);
  }

  return (
    <>
    <section className="hero">
    <h1>Wordiply Solver</h1>
    <h2>Input word from Wordiply to calculate all containing words</h2>
    </section>

    <form onSubmit={handleSubmit}>
        <input
          className="small-margin"
          value={word}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />

        <button disabled={
            word.length === 0 || 
            status === 'submitting'
          }>
          Calculate
        </button>

        {
          error !== null &&
          status !== 'success' &&
          <p color="red" className="error-text">{error.message}</p>
        }
    </form>

    {get_result_text()}
    </>
  )
}

