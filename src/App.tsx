import React from "react";
import "./App.css";
import { Greet } from "./Components/Greet";
import { Footer } from "./Components/Footer";
import Heading from "./Components/Heading";

function App() {
  let todos = [
    {
      task: "task1",
      completed: false,
    },
    {
      task: "task2",
      completed: true,
    },
  ];
  return (
    <div className="App">
      <Greet
        name="Lakshay"
        pendingTaks={10}
        isLoggedIn={true}
        status="loading"
        todos={todos}
      />
      <Footer>
        <Heading>Footer</Heading>
      </Footer>
    </div>
  );
}

export default App;
