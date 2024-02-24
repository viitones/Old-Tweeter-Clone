import { ArrowClockwise, ChatCircle, Heart } from "@phosphor-icons/react";

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps){
  return(
    <a className="tweet">
      <img src="https://github.com/viitones.png" alt="victor hugo" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Victor Hugo</strong>
          <span>@vitones</span>
        </div>

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button>
            <ChatCircle />
            20
          </button>

          <button>
            <ArrowClockwise />
            20
          </button>
          
          <button>
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  )
}