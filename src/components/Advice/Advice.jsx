import React, {useState, useEffect} from 'react'
import './Advice.css';
//import axios from 'axios';

const Advice = () => {
  const [advice, setAdvice] = useState("");
  //const [author, setAuthor] = useState("");
  //const url = 'https://api.adviceslip.com/advice';

  useEffect(() => {
    getAdvice()
  }, [])
  

  // function getAdvice() {
  //   axios.get(url)
  //     .then(response => {
  //       const advices  = response.data.slip.advice;
  //       //console.log(response);
  //       setAdvice( advices);
  //     })
  //     .catch((error) => {
  //     console.log(error);
  //   }) 
  // } 

  function getAdvice() {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
      setAdvice(data.content)
    })
  }

  
  return (
    <>
    <div className="App">
        
    <div className="card">
    <h1 className="heading"> {advice} </h1>
    {/* <h6 id="author">-{author}</h6> */}
    
    
        <button className="button" onClick={getAdvice}>
            <span>New advice</span>
          </button>
        </div>
        </div>
   </>
  )
}

export default Advice
