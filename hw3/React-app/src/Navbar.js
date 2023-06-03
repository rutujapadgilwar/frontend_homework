import React from "react";
// import { List } from "./List";
import { NavLink } from "react-router-dom";
import "./App.css";
const List = [
  {
      title: "Home",
      url: "/"
  },
  {
      title: "Search",
      url: "/Search"
  },
  {
      title: "Houses",
      url: "/Houses"
  }
];
const Navbar = () => {
  const list = List.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url}>
          {title}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul className="list">{list}</ul>
    </nav>
  );
};

export default Navbar;
