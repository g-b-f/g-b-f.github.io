import { useState, type ChangeEvent} from 'react';

function get_matching_words(match_str:string){
  return ""
}

export default function WordiplySolver() {
  const [word, setWord] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState('typing');
  const [wordList, setwordList] = useState(['']);
  const [result, setResult] = useState(['']);

  const err = (e:string) => setError(Error(e + '!'));

  function submitForm(answer: string): string {
    const ret = answer.toLowerCase();
    if (! /^[A-Za-z]+$/.test(answer)){
      err("Must be letters only");
    }
    else if (answer.length <2 ){
      err("Too few letters");
    }
    else if (answer.length >5 ){
      err("Too many letters");
    }

    return ret
}

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(word);
      setStatus('success');
    } catch (error: any) {
      setStatus('typing');
      setError(error);
    }
    const fileUrl = "/assets/words.txt";
    const response = (await fetch(fileUrl))
    if (!response.ok) throw new Error("File not found");
    const text = await response.text();
    setwordList(text.split("\n"));

  }

  function handleTextareaChange(event: ChangeEvent<HTMLInputElement>) {
    setWord(event.target.value);
  }


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

