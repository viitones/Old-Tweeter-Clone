import { FormEvent, KeyboardEvent, useState } from "react";

import { Header } from "../components/content/Header";
import { Separator } from "../components/content/Separator";
import { Tweet } from "../components/content/Tweet";




export function Timeline(){
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    'verdade',
    'quem diria',
    'top dms'
  ]);

  function createNewTweet(e:FormEvent){
    e.preventDefault();
    
    setTweets([newTweet, ...tweets]);
    setNewTweet("")
    
  }

  function handleHotKey(e:KeyboardEvent){
    if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
      setTweets([newTweet, ...tweets]);
      setNewTweet("")
    }
  }
  

  return(
    <main className="timeline">

      <Header title="Home"/>


      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/viitones.png" alt="victor hugo" />
          <textarea 
            value={newTweet}
            onChange={(e)=>{
              setNewTweet(e.target.value)
            }}
            onKeyDown={handleHotKey}
            id="tweet" 
            placeholder="What's happening"
            />
        </label>

        <button type="submit">Submit</button>
      </form>

      <Separator />

      {tweets.map(tweet => (
        <Tweet key={tweet} content={tweet}/>
      ))}
    </main>
  )
}