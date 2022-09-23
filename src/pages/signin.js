import { useState, useEffect } from "react"
import Button from "../components/button"
import FormInput from "../components/form-inputs"
import Logo from "../components/logo"
import RightImage from "../components/right-image"
import { useNavigate } from "react-router-dom"
import rightImage from "../img/data.png"
import {motion} from 'framer-motion'
import LoginVerify from "../components/login-verify"


const Signin = ()=> {

    
    const [openModal, setModal] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [values, setValues] = useState({
        username: "",
        password: "",
    })


    const inputs = [
        {
            id:1,
            name:"username",
            type: "text",
            placeholder: "Username",
            errorMessage:" username should be 3-16 characters and should'nt inlcude any special character!",
            label: "Username",
            pattern:"[A-Za-z0-9]{3,16}",
            required:true
        },
        {
            id:2,
            name:"password",
            type: "password",
            placeholder: "password",
            errorMessage:"password should be atleast 8 characters!",
            label: "Password",
            required:true

        }
    ]
    
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
       setModal(true)
        // navigate('/verify')
    }

    const onChange = (e)=>{
        setValues({...values,[e.target.name]: e.target.value })
    }
    const handleSubmit2 = async (e)=>{
        e.preventDefault()
        navigate('/forgotpassword')
    }

    console.log(values)
    
    return ( 
        <motion.div animate = {{scale:1}} initial={{scale:0}} exit={{x:"0" }} transition={{type:'tween', duration: .1}} id='signin'  className='signin'>
            
                        
            <div className='signin__left' >
                <Logo/>
                <motion.div animate = {{scale:1}} initial={{scale:0}} transition={{type:'tween', duration: .1 }} className='signin__left-content'>
                   
                    <h1>Sign Into <br/> Your Account</h1>
                    {/* <h1>Your Account</h1> */}
                    <form id="form" onSubmit={handleSubmit}>
                       {inputs.map((input) => 

                        <FormInput key={input.id}  {...input}  value={values[input.name]} onChange={onChange} />
                       )}

                        <button id="button__primary" >Sign In</button>
                        <p className="small-btn" onClick={handleSubmit2}>forgot password?</p> 
                        
             
                    </form>
                </motion.div>
            </div>
                    
           
            <div className='signin__right'>
                {/* <RightImage image={rightImage}/> */}

            </div>
            <LoginVerify open={openModal} onClose={()=>setModal(false)}  />
        </motion.div>
     );
}

export default Signin;