import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);

  function useInput() {
    const [value, setValue] = useState(0);
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
    );
    return [value, input];
  }

  const [decimal, setDecimal] = useInput(0);

  // function ResetDecimal() {
  //   const [value, setDecimalZero] = useInput(0);
  //   const input = (
  //     <input
  //       value={value}
  //       type="number"
  //       onChange={(e) => setDecimalZero(e.target.value)}
  //     />
  //   );
  //   return [input, value];
  // }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function multiply() {
    setCount(count * 10);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={multiply}>*10</button>
        <button onClick={reset}>0</button>
      </div>
      <div className="container">
        <h3>Decimal - Binary</h3>
        <h1>{decimal}</h1>
        <h1>{setDecimal}</h1>
      </div>
    </>
  );
}

export default App;
