import { FormEvent, KeyboardEvent, useState } from "react";

import { Header } from "../components/content/Header";
import { Separator } from "../components/content/Separator";
import { Tweet } from "../components/content/Tweet";
import { PaperPlaneRight } from "@phosphor-icons/react";


export function Status(){
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    'verdade',
    'quem diria',
    'top dms'
  ]);

  function createNewTweet(e:FormEvent){
    e.preventDefault();
    
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("")
    
  }

  function handleHotKey(e:KeyboardEvent){
    if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("")
    }
  }


  return(
    <main className="Status">

      <Header title="Tweet"/>

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maxime aperiam voluptatum doloremque qui ducimus error, cumque suscipit a incidunt enim rerum earum vitae temporibus voluptates soluta neque? Libero, nam!"/>

      <Separator />

      <form onSubmit={createNewTweet} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/viitones.png" alt="victor hugo" />
          <textarea 
          value={newAnswer}
          onChange={(e)=>{
            setNewAnswer(e.target.value)
          }}
          onKeyDown={handleHotKey}
          id="tweet" 
          placeholder="Tweet your answer"/>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>


      {answers.map(answer => (
        <Tweet key={answer} content={answer}/>
      ))}
    </main>
  )
}