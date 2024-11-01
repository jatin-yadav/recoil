/* eslint-disable react/display-name */
import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../src/store/atoms/counterAtom";
import { memo } from "react";

function App() {
  return (
    <RecoilRoot>
      <Counter1 />
      <Counter2 />
    </RecoilRoot>
  );
}
export default App;

const Counter1 = () => {
  return (
    <>
      <Value />
      <Incrase />
      <Decrease />
    </>
  );
};

const Counter2 = () => {
  return (
    <>
      <Value />
      <div>
        <Incrase />
        <Decrease />
      </div>
    </>
  );
};

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
}

const Incrase = memo(function () {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
});

function Value() {
  const countValue = useRecoilValue(counterAtom);
  return <p>Count: {countValue}</p>;
}
