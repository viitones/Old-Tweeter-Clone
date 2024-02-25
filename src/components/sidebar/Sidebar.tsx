import { NavLink } from "react-router-dom";

import twitterLogo from "../../assets/logo-twitter.svg";

import { User } from "@phosphor-icons/react/dist/ssr";
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil } from "@phosphor-icons/react";

export function Sidebar(){
  return(
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="twitter" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill"/>
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet">
        <Pencil />
        <span>Tweet</span>
      </button>
  </aside>
  )
}