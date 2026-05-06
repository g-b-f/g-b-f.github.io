import { useState, type ChangeEvent} from 'react';
const fileUrl = "/assets/words.txt";


export default function WordiplySolver() {
  const [word, setWord] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');
  const [wordList, setwordList] = useState<string[] | null>(null);
  const [result, setResult] = useState<string[]>([]);

  const err = (e:string) => {throw new Error(e + '!')};

  function get_matching_words(match_str: string, list: string[]): string[]{
    console.debug("getting matching words for " + match_str)
    const ret: string[] = [];
    for (const candidate of list){
      if (candidate.includes(match_str)){
        ret.push(candidate);
      }
    }
    console.log("got " + ret.length + " matching words for " + match_str)
    ret.sort((a, b) => b.length - a.length);
    return ret;
    }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
      console.debug("handling submit")

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
        else if (answer.length >5 ){
          err("Too many letters");
        }
        setStatus('success');
      
        console.debug("validated input, fetching word list")
        const response = (await fetch(fileUrl))
        if (!response.ok) err("Internal word list not found");
        const text = await response.text();
        const words = text.split("\n");
        console.log(
          "got word list. character count: " + text.length +
          " word count: " + words.length
        )
        setwordList(words);
        setResult(get_matching_words(answer, words));
      }

      catch (er: any) {
        setStatus('typing');
        setError(er);
        console.error(er)
        return
      }
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value);

  return (
    <>
    <h2>Wordiply Solver</h2>
    <p>
        Input word from Wordiply
    </p>
    <form onSubmit={handleSubmit}>

        <input
          // className="small_pad"
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
          <p color="red" className="Error">{error.message}</p>
        }
      
    </form>

    {status === 'submitting' && <p>Fetching word list…</p>}

    {status === 'success' && (
      <section>
        <h3>Matches</h3>
        {result.length > 0 ? (
          <ul>
            {result.map((candidate) => (
              <li key={candidate}>{candidate}</li>
            ))}
          </ul>
        ) : (
          <p>No matching words found.</p>
        )}
      </section>
    )}
    </>

  )
}

