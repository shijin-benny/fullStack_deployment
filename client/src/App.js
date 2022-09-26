import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  async function checkurl() {
    const response = await fetch("http://localhost:3002", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setData(data.data);
  }
  useEffect(() => {
    checkurl();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}.</p>
        <p>Hello world</p>
        <a
          className="App-link"
          href="https://agriha.arclif.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
