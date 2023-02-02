import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setquote] = useState("");
  const [color, setcolor] = useState("");
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32"];
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setquote(data));
      const randomColor = Math.floor(Math.random() * colors.length);
      setcolor(colors[randomColor]);
  };
  useEffect(() => getQuote(), []);
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div className="App">
      <span>{quote.content}</span>
      <h4 className="auth">{quote.author}</h4>
      <button className="btn" onClick={getQuote}>New Quote</button>

    </div>
    
  );
}

export default App;
