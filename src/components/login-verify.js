import { useState, useEffect } from "react"
import Button from "../components/button"
import FormInput from "../components/form-inputs"
import Logo from "../components/logo"
import RightImage from "../components/right-image"
import { useNavigate } from "react-router-dom"
import rightImage from "../img/data.png"
import qrCode from '../img/qr.png'
import ClipLoader from "react-spinners/ClipLoader"; 
import {motion} from 'framer-motion'



const LoginVerify = ({open,onClose})=> {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        setTimeout (() => {
            setLoading(false)
            
        },500) 
    }, []);

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
       
        navigate('/resetpassword')
    }

    const onChange = (e)=>{
        setValues({...values,[e.target.name]: e.target.value })
    }
    const handleSubmit2 = async (e)=>{
        e.preventDefault()
        navigate('/forgotpassword')
    }

    console.log(values)

    
    
    if(!open) return null
    return ( 
           
           
            <div className="modal__overlay" onClick={onClose}>
                 {
                        loading?
                        <ClipLoader className="loader" color={'red'} loading={loading}  size={50} />
                        : 

            <motion.div animate = {{scale:1}} initial={{scale:0}} transition={{type:'tween', duration: .1, delay:'.5'}} className='login__verify' onClick={(e)=>{
                e.stopPropagation()
            }}>
            <h2>Two-Factor Authentication</h2>
                    <h3>setup up two-factor authentication.</h3>
                    <p>scan this QR code with your google authentication app and enter the verification code below</p>
                    <div class="qr__code">
                        <img src={qrCode}/>
                    </div>
                    <form id="otp__form" onSubmit={handleSubmit}>
                        <input type="otp" name="otp" id="otp" placeholder="enter code" required />
                        <button class="otp__btn">Verify</button>

                    <p>need help?</p>
                    <p className="close-btn" onClick={onClose}>X</p> 
                    </form>
                        
            </motion.div>
            }
            </div>
            
        
     );
}

export default LoginVerify;