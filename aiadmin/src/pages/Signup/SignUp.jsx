import React from 'react'
import './SignUp.scss'
import { publisher } from '@/formsourse'
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
export default function SignUp() {
               return (
                              <>
                                             <div className="bodyContainer">
                                                            <div className="bodyContainerchild">
                                                                           <div className="signup">
                                                                                          <div className="left">
                                                                                                         <div>
                                                                                                                        <div className="top">
                                                                                                                                       <h2>Sign Up</h2>
                                                                                                                        </div>
                                                                                                                        <hr />
                                                                                                                        <form>
                                                                                                                                       {publisher.map((input) => (
                                                                                                                                                      <div className='inputField' key={input.id}>
                                                                                                                                                                     <label>{input.label}</label>
                                                                                                                                                                     <input
                                                                                                                                                                                    type={input.type}
                                                                                                                                                                                    placeholder={input.placeholder}
                                                                                                                                                                     />
                                                                                                                                                      </div>
                                                                                                                                       ))}
                                                                                                                                       <p>Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
                                                                                                                                       <button>Sign Up</button>
                                                                                                                                       <p>Already Have Account ? <b>Sign Up</b></p>
                                                                                                                                       {/* <NavLink to='/SignIn'>Sign In</NavLink> */}
                                                                                                                        </form>
                                                                                                         </div>
                                                                                          </div>
                                                                                          <div className="right">
                                                                                          <img src="https://media1.tenor.com/m/5pvm3QlGy5YAAAAd/satisfaction-satisfied.gif" alt="Your GIF" />
                                                                                          </div>
                                                                                          
                                                                                         
                                                                           </div>
                                                            </div>
                                             </div>
                              </>
               )
}
