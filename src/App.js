import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    //fetches the data
    const res = await fetch("https://api.advicelip.com/advice");
    const data = await res.json();

    //update the state
    setadvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function) {
    getAdvice()
  }, []);

  return (
    <div>
      {/* changes state on the user interface*/}
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      {/* whenever button is clicked, getAdvice is called */}
      <p>
        You have read <strong>(count)</strong>pieces of advice.
      </p>
    </div>
  );
}
