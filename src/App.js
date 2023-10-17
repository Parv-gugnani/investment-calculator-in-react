import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) return <div className="App"></div>;
}

export default App;
