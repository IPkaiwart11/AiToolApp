import React from 'react'
import './SignUp.scss'
import { useState } from 'react';
// import axios from 'axios';
export default function SignUp() {
   const [emailError, setEmailError] = useState('');
   const [numberError, setNumberError] = useState('');
   const [cpasswordError, setCpasswordError] = useState('');
   const [successfull, setSuccessful] = useState('');
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      number:'',
      userType:'publisher',
      password: '',
      confirmPassword: '',
   });


   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });

      if (name === 'email') {
         if (value.trim() === '') {
            // Clear the email error if the input is empty
            setEmailError('');
         } else {
            // Regular expression for email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValidEmail = emailPattern.test(value);
            if (!isValidEmail) {
               setEmailError(<span className="error"><img src="./error.png" alt="error" /> Invalid email format</span>);
            } else {
               setEmailError('');
            }
         }
      }

      if(name === 'number'){
         if(value.trim() ===''){
            setNumberError('');
         } else if (value.length < 10 || value.length > 10){
            setNumberError(<span className='error'>number must be 10 digits </span>)
         }else{
            setNumberError('');
         }
      }

      if(name === 'password'){
         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
         if(value ===''){
            document.getElementById('passwrd').style.color = "inherit";
         }else if (!passwordPattern.test(value)) {
            document.getElementById('passwrd').style.color = "#fc3321";
            // return;
         }else{
            document.getElementById('passwrd').style.color = "inherit";
         }
          
        }

      if (name === 'confirmPassword') {
         if (value.trim() === '') {
            setCpasswordError("");
         } else if (formData.password !== value) {
            setCpasswordError(<span className="error"><img src="./error.png" alt="error" /> Passwords do not match</span>);
         } else {
            setCpasswordError('');
         }
      }
   };


   const handleClick = async (e) => {
      e.preventDefault();

      if (emailError || cpasswordError) {
         return;
      }

      try {
         const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         const data = await res.json();

         if (res.ok) {
            console.log('Success:', data);
            setFormData({
               username: '',
               email: '',
               number: '',
               userType: 'publisher',
               password: '',
               confirmPassword: '',
            });
            setSuccessful(<span className="success"><img src="./success.png" alt="success" /> SignUp successful!</span>);
         } else {
            console.error('Error:', data);
         }
      } catch (error) {
         console.error('Error on handleClick:', error);
      }
   };

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
                                 type="number"
                                 name='number'
                                 placeholder="Mob number"
                                 value={formData.number}
                                 onChange={handleChange}
                                 required
                              />
                              {numberError && <span className='error'>{numberError}</span>}
                           </div>
                           <div className='inputField' >
                              <input
                                 type="text"
                                 name='userType'
                                 placeholder="userType"
                                 value='publisher'
                                 readOnly
                              />
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
                           </div>


                           <p id='passwrd'>Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
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
                           <p>Already have an Account ? <b style={{ cursor: 'pointer' }}>SignIn</b></p>
                        </form>
                     </div>
                  </div>
                  <div className="right">
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
