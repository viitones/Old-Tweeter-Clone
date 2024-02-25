import { Header } from "../components/content/Header";
import { Separator } from "../components/content/Separator";
import { Tweet } from "../components/content/Tweet";

const answers = [
  'verdade',
  'quem diria',
  'top dms'
]

export function Status(){
  return(
    <main className="Status">

      <Header title="Tweet"/>

      <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maxime aperiam voluptatum doloremque qui ducimus error, cumque suscipit a incidunt enim rerum earum vitae temporibus voluptates soluta neque? Libero, nam!"/>

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/viitones.png" alt="victor hugo" />
          <textarea id="tweet" placeholder="Tweet your answer"/>
        </label>

        <button type="submit">Submit</button>
      </form>


      {answers.map(answer => (
        <Tweet key={answer} content={answer}/>
      ))}
    </main>
  )
}