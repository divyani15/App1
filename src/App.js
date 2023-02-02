import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setquote] = useState("");
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setquote(data));
      
  };
  useEffect(() => getQuote(), []);

  return (
    <div className="App">
      <span>{quote.content}</span>
      <h4 className="auth">{quote.author}</h4>
      <button className="btn" onClick={getQuote}>New Quote</button>

    </div>
    
  );
}

export default App;
