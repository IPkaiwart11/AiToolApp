import * as React from 'react';
import "./Newtool.scss"
import { newToolInputs } from '../../formsourse';



function Newtool() {
  return (
    <>
      <div className="newtoolContainer">
               <div className="top">
                              <h3>create new aitool</h3>
               </div>
               <div className="bottom">
              
                <div className="right">
               <form >
                {newToolInputs.map((input) => (
                <div className="inputField" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

     
      <div className="inputField">
        <label htmlFor="">Thumbnail</label>
        <input 
            type="file"
             />
      </div>
      <div className="inputField">
        <label htmlFor="pricing">Pricing</label>
        <select name="pricing" id="">
          <option value="">free</option>
          <option value="">freeTrial</option>
          <option value="">paid</option>
          <option value="">freemium</option>
        </select>
      </div>
     
      <div className="inputField">
        <label htmlFor="">Pricing URL</label>
        <select name="" id="">
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
          <option value="">four</option>
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="">Pricing URL</label>
        <select name="" id="">
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>
          <option value="">four</option>
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="platform">Platform</label>
        <select name="platform" id="">
          <option value="">Window</option>
          <option value="">Linux</option>
          <option value="">macOS</option>
          <option value="">Web-based</option>
          <option value="">vs code</option>
        </select>
      </div>
      <div className="inputField">  
           <button>Send</button>
           </div>
 
      </form>
    </div>
               </div>
      </div>
    </>
  )
}


export default Newtool
