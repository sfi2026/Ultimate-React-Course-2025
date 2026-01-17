export default function App() {

  async function getAdvice() {
    const res = await fetch("https://api.advicelip.com/advice");
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}
