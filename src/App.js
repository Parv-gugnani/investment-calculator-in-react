import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import Userinput from "./components/Userinput";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSaving = +userInput["current-saving"];
    const yearlyContri = +userInput["yearly-contribution"];
    const expectedRetr = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyIntst = currentSaving * expectedRetr;
      currentSaving += yearlyIntst + yearlyContri;
      yearlyData.push({
        year: i + 1,
        yearlyIntst: yearlyIntst,
        savingEndofYear: currentSaving,
        yearlyContri: yearlyContri,
      });
    }
  }

  return (
    <div className="App">
      React App
      <Header />
      <Userinput onCalculate={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment Calculated yet.</p>
      )}
      {userInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
