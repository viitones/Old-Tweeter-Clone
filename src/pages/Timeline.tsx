import { Header } from "../components/content/Header";
import { Separator } from "../components/content/Separator";
import { Tweet } from "../components/content/Tweet";

const tweets = [
  'meu primeiro',
  'deu certo',
  'oi',
  'mais um'
]

export function Timeline(){
  return(
    <main className="timeline">

      <Header title="Home"/>


      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/viitones.png" alt="victor hugo" />
          <textarea id="tweet" placeholder="What's happening"/>
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