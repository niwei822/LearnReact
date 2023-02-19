import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}
const showBackground = false;
const animalFacts = (
  <div>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
    <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
  </div>
);
function displayFact(e) {
  const animalClicked = e.target.alt;
  const animalInfo = animals[animalClicked];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}
ReactDOM.render(animalFacts, document.getElementById("root"));
