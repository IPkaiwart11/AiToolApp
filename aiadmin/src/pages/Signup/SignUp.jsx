import React from 'react'
import './SignUp.scss'
import { useState } from 'react';
import axios from 'axios';
export default function SignUp() {
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordsMatch: true,
   });
   

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   
      // Check if the field being updated is password or confirm-password
      if (name === 'password' || name === 'confirmPassword') {
         // If so, check if the passwords match and update a state indicating whether they match or not
         setFormData(prevState => ({
            ...prevState,
            passwordsMatch: prevState.password === prevState.confirmPassword,
         }));
      }
   }
   
  
   const handleClick = async(e)=>{
      e.preventDefault();
    if(formData.username==="" | formData.email==="" | formData.password===""){
      alert("fill all input box");
      return;
    }
       // Check if passwords match
   if (!formData.passwordsMatch) {
      // Handle password mismatch error, alert user, or prevent form submission
      alert("Passwords do not match!");
      return;
   }
      try {
         
         // const res = await axios.post("http://localhost:5173",formData)
         // console.log("formdata:", res.data);
         console.log(formData)
         setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordsMatch: true, 
         })
        
         alert("welcome to ai tool app");
      } catch (error) {
         console.error("error on handleClick",error);
      }
  
   }

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
                           <div className='inputField' >
                              <input
                                 type="text"
                                 // id='username'
                                 name='username'
                                 value={formData.username}
                                 placeholder="username"
                                 onChange={handleChange}
                                 autoComplete="username"
                                 required
                              />
                           </div>
                           <div className='inputField' >
                              <input
                                 type="email"
                                 // id='email'
                                 name='email'
                                 value={formData.email}
                                 placeholder="Enter your email"
                                 onChange={handleChange}
                                 autoComplete="email"
                                 required
                              />
                           </div>
                           <div className='inputField' >
                              <input
                                 type="password"
                                 name='password'
                                 // id='password'
                                 value={formData.password}
                                 placeholder="Password"
                                 required
                                 onChange={handleChange}

                              />
                           </div>
                           <div className='inputField' >
                              <input
                                 type="password"
                                 name='confirmPassword'
                                 value={formData.confirmPassword}
                                 placeholder="confirm password"
                                 // required
                                 onChange={handleChange}
                             
                              />
                           </div>


                           <p>Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
                           <button onClick={handleClick} >Sign Up</button>
                           <div className="line1">
                              <div className="line1-child"></div>
                              <div>or</div>
                              <div className="line1-child"></div>
                           </div>
                           <div className='signupgoogle'>
                              <img srcSet="./google.png" alt="google" />
                              Signup with Google
                              </div>
                           <p>Already have an Account ? <b>Sign Up</b></p>
                        </form>
                     </div>
                  </div>
                  <div className="right">

                     {/* <img src="https://cdn.pixabay.com/photo/2017/09/14/11/14/water-2748660_1280.png" alt="Your GIF" /> */}

                     {/* <span className="AiToolTitle">Ai Tools</span> */}
                     <div className="wrapper">
  <span>A</span>
  <span>i</span>
  <span>-</span>
  <span>T</span>
  <span>o</span>
  <span>o</span>
  <span>l</span>
  <span>s</span>
</div>
                  </div>


               </div>
            </div>
         </div>
      </>
   )
}
