import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Tulsi Mobile and Electronics</h1>
    <div>scratch the card get an oppurtunity to win upto RS 10,000/- </div>
    <Link to="/scratch">Click here to scratch the card</Link>
  </div>
);

export default Home;
