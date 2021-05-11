// Home.jsx
import React from "react";

const Home = () => {
  console.log("Home Page Render");

  return (
    <button onClick={() => alert('Hello world')}>
      Click me
    </button>
  )
};

export default Home;