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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const DbLogin = ()=> {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout (() => {
            setLoading(false)
            
        },500) 
    }, []);
    // const notify = () => toast("Wow so easy!");

    const [values, setValues] = useState({
        dbname: "",
        dbip: "",
        domain: "",
    })


    const inputs = [
        {
            id:1,
            name:"dbname",
            type: "text",
            placeholder: "db name",
            errorMessage:" dbname should be atleast 3 characters",
            label: "Database name",
            pattern:"[A-Za-z0-9]{3,16}",
            required:true
        },
        {
            id:2,
            name:"dbip",
            type: "text",
            placeholder: "dbip",
            errorMessage:"enter valid IP address",
            label: "Database ip address",
            required:true

        },
        {
            id:3,
            name:"domain",
            type: "email",
            placeholder: "dbip",
            errorMessage:"enter valid domain",
            label: "Database domain",
            required:true

        }
    ]
    
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        toast("Database connected successfully")
       
        // navigate('/resetpassword')
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
        <div className='signin'>
            <ToastContainer />

           
            <div className='signin__left' >
                <Logo/>
                {
                        loading?
                        <ClipLoader className="loader" color={'red'} loading={loading}  size={50} />
                        : 
                <div className='signin__left-content'>
                    <h1>Connect Database</h1>
                    {/* <h1>Your Account</h1> */}
                    <form onSubmit={handleSubmit}>
                       {inputs.map((input) => 

                        <FormInput key={input.id}  {...input}  value={values[input.name]} onChange={onChange} />
                       )}

                        <button onClick={handleSubmit}>Connect DB</button>
                        <p className="small-btn" onClick={handleSubmit2}>forgot password?</p> 
                        
             
                    </form>
                </div>
                }
            </div>
            <div className='signin__right'>
                {/* <RightImage image={rightImage}/> */}

            </div>
            {/* <div className="overlay"></div> */}
            
            {/* <div className='login__verify'>
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
                    </form>
            </div> */}
        </div>
     );
}

export default DbLogin;