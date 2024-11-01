/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CounterDisplay count={count} />
      </div>
      <div style={{ display: "flex" }}>
        <Increment setCount={setCount} />
        <Dcrement setCount={setCount} />
      </div>
    </>
  );
};

const CounterDisplay = ({ count }) => {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

const Increment = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((i) => i + 1)}>Increase</button>
    </div>
  );
};

const Dcrement = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((i) => i - 1)}>Dcrease</button>
    </div>
  );
};
export default App;
