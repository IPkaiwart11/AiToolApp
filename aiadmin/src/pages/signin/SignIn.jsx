import React, { useState } from 'react'
import '../Signup/SignUp.scss'
export default function SignIn() {
   const [emailError, setEmailError] = useState('');
   const [success, setSuccess] = useState("")
   const [formData,setFormData] = useState({
      email:'',
      password:''
   })

   const handleChange = (e)=>{
      const {name,value} = e.target;
      setFormData({...formData, 
          [name]: value
      });
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
       // Regular expression for password validation
       if(name === 'password'){
         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
         if(value ===''){
            document.getElementById('passwrd').style.color = "inherit";
         }else if (!passwordPattern.test(value)) {
            document.getElementById('passwrd').style.color = "#fc3321";
            
         }else{
            document.getElementById('passwrd').style.color = "inherit";
         }
          
        }
   }

   const handleClick = async(e) =>{
      e.preventDefault();
      try {
         // const res = await axios.post("http://localhost/5173", formData);
         // console.log("response:", res.data);
         console.log(formData);
         setSuccess(<span className="success"><img src="./success.png" alt="success" />SignUp successfull!</span>)
         setFormData({
            email:'',
            password:''
         })
      } catch (error) {
         setSuccess(<span className="error"><img src="./error.png" alt="error" />Error</span>)
         console.error("onsubmiting error", error);
         
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
                           <h2>Sign In</h2>
                        </div>
                        <hr />
                        <form onSubmit={handleClick}>
                              <div className='inputField' >
                                 <input
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required

                                 />
                                 {emailError && <span className="error">{emailError}</span>}
                              </div>
                              <div className='inputField' >
                                 <input
                                    
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                 />
                              </div>
                           <p id = "passwrd">Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
                           <h5 style={{color:"#055ce8", cursor:"pointer"}}>Forgot Password ?</h5>
                           <button type='submit'>Sign In</button>
                           {success? <span>{success}</span>: ""}
                           <div className="line1">
                              <div className="line1-child"></div>
                              <div>or</div>
                              <div className="line1-child"></div>
                           </div>
                           <div className='signupgoogle'>
                              <img srcSet="./google.png" alt="google" />
                              Signup with Google
                              </div>
                           <p>Dont Have an Account ? <b style={{cursor:'pointer'}}>Sign Up</b></p>
                        </form>
                     </div>
                  </div>
                  <div className="right">
                  {/* <div className="wrapper">
                        <span>A</span>
                        <span>i</span>
                        <span>-</span>
                        <span>T</span>
                        <span>o</span>
                        <span>o</span>
                        <span>l</span>
                        <span>s</span>
                     </div> */}
                  </div>


               </div>
               <div style={{marginTop:"50px"}}>
                  <span style={{padding:"5px", color:"darkBlue"}}>term of use</span>
                   | 
                   <span style={{padding:"5px", color:"darkBlue"}}>Privacy Policy</span>
               </div>
            </div>
         </div>
      </>
   )
}
