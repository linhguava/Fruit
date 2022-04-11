import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div>
        <h1 className="title">Welcome to Fruit restaurant</h1>
        <p className="description">
          The Setouchi Fruit Cafe is full of seasonal fruits you can pick by
          hand, as well as a delicious menu of savory and sweet dishes.
        </p>
        <a href="#" className="headerButton">
          Button
        </a>
      </div>
    </div>
  );
}
