import React, {useState, useEffect} from 'react'
import './Advice.css';
import twitterIcon from '../Advice/twitter.svg';
import facebookIcon from '../Advice/facebook.svg';
//import axios from 'axios';


const Advice = () => {
   
  const [advice, setAdvice] = useState("hello");
  // eslint-disable-next-line 
  const [author, setAuthor] = useState("hoo");
  //const url = 'https://api.adviceslip.com/advice';
  //https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

  useEffect(() => {
    getAdvice()
  }, [])
  
  function getAdvice() {
    let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setAdvice(randomQuote.quote);
        setAuthor(randomQuote.author)

      } )
  }
  function handleClick() {
    getAdvice()
  }
  
  return (
    <>
    <div className="App">
        
    <div className="card">
    <h1 className="heading"> {advice} </h1>
     <h6 id="author">-{author}</h6>
       <div id="buttons">
            <div className="social-media">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" id="tweet-quote">
              <span><img src={twitterIcon} alt="" /></span>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" id="fb-quote"> {/** target="_blank" rel="noopener noreferrer"  will open in other tab */}
            <span><img src={facebookIcon} alt="" /></span>
          </a>
          </div>
        <button className="button" onClick={handleClick}>
            <span>New advice</span>
            </button>
            </div>
        </div>
        </div>
   </>
  )
}

export default Advice
