import { Header } from "./Header";
import { Separator } from "./Separator";
import { Tweet } from "./Tweet";

export function Content(){
  return(
    <div className="content">
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

        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />

      </main>
    </div>
  )
}