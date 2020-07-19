import React ,{useState} from 'react';
import './App.css';

function App() {
  const [binaryText, setBinaryText] = useState('');
  const [decimalText, setDecimalText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (event) =>{
    setBinaryText(event.target.value);
    setErrorMessage('');
  }

  const onClickHandle = () =>{
    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage('Enter either 0 or 1');
      return
    }
    setErrorMessage('');
    const reversedBinaryText = binaryText.split('').map(Number).reverse();

    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, index) =>{
       return accumulator + currentValue * Math.pow(2, index)
      });

    setDecimalText(result);

  }
  return (
    <div className="App">
      <h1 className="header">Binary To Decimal</h1>
      <div className="Field">
        <h4 className="title">Enter Binary Number</h4>
        <input className="boxSize" value={binaryText} onChange={handleChange} placeholder="Enter 0's and 1's"></input>
        <button className="convertButton" onClick={onClickHandle}> Convert</button>
        { 
          errorMessage &&  
          <h4 className="errorMsg">{errorMessage}</h4>
        } 
      </div>     
      <div className="Field">
        <h4 className="title" >Decimal Output</h4>
        <input disabled className="boxSize" value={decimalText}></input>
      </div>
    </div>
  );
}

export default App;
