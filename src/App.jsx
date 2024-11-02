import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../src/store/atoms/counterAtom";
import NavBar from "./NavBar";
import Todos from "./Todos";

function App() {
  return (
    <RecoilRoot>
      <Todos />
      <NavBar />
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

function Incrase() {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}

function Value() {
  const countValue = useRecoilValue(counterAtom);
  return <p>Count: {countValue}</p>;
}
