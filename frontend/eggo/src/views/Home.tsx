import React from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/test">test</Link>
    </div>
  );
};

export default Home;
