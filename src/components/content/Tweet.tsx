import { ArrowClockwise, ChatCircle, Heart } from "@phosphor-icons/react";

export function Tweet(){
  return(
    <a className="tweet">
      <img src="https://github.com/viitones.png" alt="victor hugo" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Victor Hugo</strong>
          <span>@vitones</span>
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nihil, at impedit vero possimus placeat eligendi suscipit qui dolores delectus a officia vitae tempore repudiandae enim eius mollitia non quibusdam!</p>

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