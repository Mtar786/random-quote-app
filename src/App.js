import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity.",
    author: "Albert Einstein",
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },
];

function App() {
  const [quote, setQuote] = useState({});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote(); // show a quote on page load
  }, []);

  return (
    <div className="App">
      <div className="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={getRandomQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
