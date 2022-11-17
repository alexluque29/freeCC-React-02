import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import logo from "./images/freecodecamp.svg";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const useClick = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="main-container">
        <Counter numClicks={counter} />
        <Button text="Click" isClickButton={true} useClick={useClick} />
        <Button text="Reset" isClickButton={false} useClick={reset} />
      </div>
    </div>
  );
}

export default App;
