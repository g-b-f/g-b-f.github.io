import { useState, type ChangeEvent} from 'react';

export default function WordiplySolver() {
  const [word, setWord] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');
  const [wordList, setwordList] = useState<string[] | null>(null);
  const [result, setResult] = useState(['']);

  const err = (e:string) => {throw new Error(e + '!')};

  function get_matching_words(match_str: string): string[]{
    console.log("getting matching words for " + match_str)
    let ret = [];
    if (wordList === null) {throw new Error("word list is unexpectedly null")}
    for (const candidate of wordList){
      if (candidate.includes(match_str)){
        ret.push(candidate);
      }
    }
    console.log("got " + ret.length + " matching words")
    return ret;
    }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
      console.log("handling submit")

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
      
        console.log("validated input, fetching word list")
        const fileUrl = "/assets/words.txt";
        const response = (await fetch(fileUrl))
        if (!response.ok) err("File not found");
        const text = await response.text();
        console.log("got word list. character count: " + text.length + " word count: " + text.split("\n").length)
        setwordList(text.split("\n"));
        console.log(wordList === null ? "word list is null" : "word list is not null")
        console.log("got word list of length " + wordList?.length)
        setResult(get_matching_words(answer));
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
          <p color= "red" className="Error"> {error.message} </p>
        }
      
    </form>
    {result}
    </>

  )
}

