import React from 'react'
import './SignUp.scss'
import { useState } from 'react';
import axios from 'axios';
export default function SignUp() {
   const [emailError, setEmailError] = useState('');
   const [cpasswordError, setCpasswordError] = useState('');
   const [successfull, setSuccessful] = useState('');
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
   });
   

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      if (name === 'email') {
         // Regular expression for email validation
         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         const isValidEmail = emailPattern.test(value);
         if (!isValidEmail) {
            setEmailError('Invalid email format');
            return;
         } else {
            setEmailError('');
         }
      }
      if(name === 'confirmPassword'){
      if(formData.password !== value){
         setCpasswordError('password are not matching');
         return;
      }else{
         setCpasswordError('');
      }
   }
   };
   
  
   const handleClick = async(e)=>{
      e.preventDefault();
      // if(formData.password !== formData.confirmPassword){
      //    document.getElementById("confirmPassword").style.border = "2px solid red";
      //    document.getElementById("error").style.visibility = "visible";
      //    return;
      // }
      if (emailError || cpasswordError) {
         // If there are errors, do not proceed with form submission
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
         })
         // document.getElementById("confirmPassword").style.border = "none";
         // document.getElementById("confirmPassword").style.borderBottom = "1px solid rgb(242, 242, 247)";
         // document.getElementById("error").style.visibility = "hidden";
         setSuccessful("signUp successful!")
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
                        <form onSubmit={handleClick}>
                           <div className='inputField' >
                              <input
                                 type="text"
                                 name='username'
                                 placeholder="username"
                                 value={formData.username}
                                 onChange={handleChange}
                                 required
                              />
                           </div>
                           <div className='inputField' >
                              <input
                                 type="email"
                                 name='email'
                                 placeholder="Enter your email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                              />
                               {emailError && <span className="error">{emailError}</span>}
                           </div>
                           <div className='inputField' >
                              <input
                                 type="password"
                                 name='password'
                                 
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
                                 id='confirmPassword'
                                 placeholder="confirm password"
                                 value={formData.confirmPassword}
                                 required
                                 onChange={handleChange}
                             
                              />
                              {cpasswordError && <span className="error">{cpasswordError}</span>}
                              {/* <span id='error'>Error: passwords do not match</span> */}
                           </div>


                           <p>Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
                           <button >SignUp</button>
                           {successfull && <span className="success">{successfull}</span>}
                           <div className="line1">
                              <div className="line1-child"></div>
                              <div>or</div>
                              <div className="line1-child"></div>
                           </div>
                           <div className='signupgoogle'>
                              <img srcSet="./google.png" alt="google" />
                              Signup with Google
                              </div>
                           <p>Already have an Account ? <b>SignIn</b></p>
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
