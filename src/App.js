import React from 'react'
import "./App.css";
import {divide, incNumber, multi} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      

      <div className="container">
  
      <h1>Mini Calculator By kamal</h1>
      <h4>using <span className='k'>React</span> and <span className='k'>Redux</span></h4>
      
      <div className="quantity">
        <a className="quantity__plus" title="multiply" onClick={() => dispatch(multi(4))}><span>*4</span></a>
        <a className="quantity__plus" title="multiply" onClick={() => dispatch(multi(2))}><span>*2</span></a>
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(1))}><span>+</span></a>
        
        <a className="quantity__plus" title="DIVIDE" onClick={() => dispatch(divide(2))}><span>/2</span></a>
        <a className="quantity__plus" title="DIVIDE" onClick={() => dispatch(divide(4))}><span>/4</span></a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App
