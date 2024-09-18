import React, { useState } from "react";

import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>CALCULATOR</h1>
      <form className="output">
        <input type="text" value={input} readOnly className="in" />
        <input type="text" value={result} readOnly className="in" />
      </form>
      <div className="keypad">
        <div className="first">
            <button onClick={clear} id="clear">Clear</button>
            <button onClick={backspace} id="backspace">Delete</button>
            <button name="." onClick={handleClick}>.</button>
            <button name="/" onClick={handleClick}>&divide;</button>

        </div>

        <div className="two">
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="*" onClick={handleClick}>&times;</button>
        </div>

        <div className="three">
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="-" onClick={handleClick}>&ndash;</button>
        </div>
        

       <div className="four">
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="+" onClick={handleClick}>+</button>
       </div>
        <div className="five">
            <button name="0" onClick={handleClick}>0</button>
            <button onClick={calculate} id="equals">=</button>
        </div>
            
      </div>
    </div>
  );
}

export default Calculator;
