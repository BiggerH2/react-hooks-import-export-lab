import React from "react";
import { username, city } from "../data/user"; // Importing the username and city variables

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home; // Exporting the Home component as default
