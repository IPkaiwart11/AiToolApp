import React, { useState } from 'react'
import '../Signup/SignUp.scss'
export default function SignIn() {
   const [formData,setFormData] = useState({
      email:'',
      password:''
   })

   const handleChange = (e)=>{
      setFormData({...formData, 
      [e.target.name]: e.target.value
      })
   }

   const handleClick = async(e) =>{
      e.preventDefault();
      if(formData.email==='' | formData.password===''){
         alert("Fill all input fields");
         return;
      }
      try {
         // const res = await axios.post("http://localhost/5173", formData);
         // console.log("response:", res.data);
         console.log(formData);
         setFormData({
            email:'',
            password:''
         })
      } catch (error) {
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
                        <form>
                              <div className='inputField' >
                                 <input
                                    type="email"
                                    placeholder="abc@gmail.com"
                                    name='email'
                                    onChange={handleChange}
                                 />
                              </div>
                              <div className='inputField' >
                                 <input
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    onChange={handleChange}
                                 />
                              </div>
                           <p>Password requirements must be atleast 8 characters long contain a capital letter, a number and speacial symbol</p>
                           <button onClick={handleClick}>Sign In</button>
                           <div className="line1">
                              <div className="line1-child"></div>
                              <div>or</div>
                              <div className="line1-child"></div>
                           </div>
                           <div className='signupgoogle'>
                              <img srcSet="./google.png" alt="google" />
                              Signup with Google
                              </div>
                           <p>Already Have Account ? <b>Sign Up</b></p>
                        </form>
                     </div>
                  </div>
                  <div className="right">
                      
                     <img src="https://cdn.pixabay.com/photo/2017/09/14/11/14/water-2748660_1280.png" alt="Your GIF" />

                     <span className="AiToolTitle">Ai Tools</span>
                  </div>


               </div>
            </div>
         </div>
      </>
   )
}
