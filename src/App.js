import { useState } from "react";
import Header from "./components/Header";
import Userinput from "./components/Userinput";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSaving = +userInput["current-saving"];
    const yearlyContri = +userInput["yearly-contribution"];
    const expectedRetr = +userInput["expected-return"] / 100; // Removed the extra '+'
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyIntst = currentSaving * expectedRetr; // Changed '+' to '*'
      currentSaving += yearlyIntst + yearlyContri; // Fixed the calculation
      yearlyData.push({
        // Changed 'yearlyContri' to 'yearlyData'
        year: i + 1,
        yearlyIntst: yearlyIntst,
        savingEndofYear: currentSaving,
        yearlyContri: yearlyContri, // You can keep this if you need it
      });
    }
  }

  return (
    <div className="App">
      Hello
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
