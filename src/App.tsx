import "./App.css";
import ReactIcon from "./assets/react.svg"
function App() {
  return (
    <div className="App w-full h-[100vh] content-center justify-items-center bg-slate-900 text-white">
      <h1 className="text-5xl">Vite + React + Tailwind</h1>
      <h1> :)</h1>
      <h1 className="w-full text-start text-3xl h-96 px-20 absolute content-center bg-slate-500 opacity-20">Tailwind is fun</h1>
      <img src={ReactIcon} alt="react Icon"  width={200}/>
    </div>
  );
}

export default App;
