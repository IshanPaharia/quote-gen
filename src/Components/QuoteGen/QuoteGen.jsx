import React, { useState, useEffect } from "react";
import "./QuoteGen.css";
import reload_icon from "../Assets/reload-svgrepo-com.svg";
import github_icon from "../Assets/github-142-svgrepo-com.svg";

const QuoteGen = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    quote: "Random quote here, Press reload",
    author: "Ishan Paharia",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  useEffect(() => {
    const loadQuotes = async () => {
      const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: { "X-Api-Key": "iQchly/huc+aXqlC0ZDKOQ==Uotp1dw4XDygbGY0" },
        limit: 100,
      });

      const data = await response.json();
      setQuotes(data);
    };

    loadQuotes();
  }); 
  return (
    <div className="container">
      <div className="quote">{quote.quote}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">- {quote.author.split(",")[0]}</div>
        <div className="icons">
          <img src={reload_icon} onClick={random} alt="" />
          <img
            src={github_icon}
            onClick={() => window.open("https://github.com/IshanPaharia")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteGen;
