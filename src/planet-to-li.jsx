import React from "react";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const planetsInHTML = planets.map((planet, index) => (
  <li key={index} className="list-group-item">
    {planet}
  </li>
));

const Planets = () => {
  return <ul className="list-group m-5">{planetsInHTML}</ul>;
};

export default Planets;
