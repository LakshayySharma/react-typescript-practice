import React from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">Typescript App</header>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
        label="Submit"
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container style={{ background: "#dd02af" }} />
    </div>
  );
}

export default App;
