import Button from "../components/button"
import FormInput from "../components/form-inputs"
import { useNavigate } from "react-router-dom"
import Logo from "../components/logo"
import RightImage from "../components/right-image"
import { useState, useEffect } from "react"
import rightImage from "../img/reset.png"
import {motion} from 'framer-motion'
import ClipLoader from "react-spinners/ClipLoader"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const ForgotPass = ()=> {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout (() => {
            setLoading(false)
            
        },250) 
    }, []);
    const [values, setValues] = useState({
        email: "",
    })


    const inputs = [
        {
            id:1,
            name:"email",
            type: "email",
            placeholder: "email",
            errorMessage:"Enter Valid email address",
            label: "enter email asscociated with account",
            required:true

        },
       
    ]

    const onChange = (e)=>{
        setValues({...values,[e.target.name]: e.target.value })
    }
    
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        // navigate('/')
        toast("Check email for instructions")

    }
    const handleSubmit2 = async (e)=>{
        e.preventDefault()
        navigate('/')

    }
    return ( 
        <div className="signin">
            <ToastContainer />

             <div className='signin__left' >
            <Logo/>
            {
                        loading?
                        <ClipLoader className="loader" color={'red'} loading={loading}  size={50} />
                        : 
                <motion.div  animate={{width:"100%", opacity:"1"}} initial={{width:0, opacity:0}} transition={{delay: .1}} exit={{X:'0'}} className='signin__left-content'>
                    <h1>Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                    {inputs.map((input) => 

                        <FormInput key={input.id}  {...input}  value={values[input.name]} onChange={onChange} />
                        )}
                        <button id="button__primary">Send</button>
                        <p className="small-btn" onClick={handleSubmit2}>back</p>
                    </form>
                </motion.div>
            }
            </div>
                <div className='signin__right'>
                    {/* <RightImage image={rightImage}/> */}

                </div>
        </div>
     );
}

export default ForgotPass;