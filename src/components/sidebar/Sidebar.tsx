import twitterLogo from "../../assets/logo-twitter.svg";

import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House } from "@phosphor-icons/react";
import { User } from "@phosphor-icons/react/dist/ssr";

export function Sidebar(){
  return(
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="twitter" />

      <nav className="main-navigation">
        <a className="active" href="">
          <House weight="fill"/>
          Home
        </a>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button className="new-tweet">Tweet</button>
  </aside>
  )
}