import Button from "../components/button"
import FormInput from "../components/form-inputs"
import Logo from "../components/logo"
import RightImage from "../components/right-image"
import rightImage from "../img/data.png"
import { useNavigate } from "react-router-dom"
import { useState , useEffect} from "react"
import {motion} from 'framer-motion'
import ClipLoader from "react-spinners/ClipLoader"; 
import HashLoader from "react-spinners/HashLoader"




const ResetPass = () =>{
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        setTimeout (() => {
            setLoading(false)
            
        },500) 
    }, []);
    
    const [values, setValues] = useState({
        initialPass: "",
        newPass: "",
        password2: "",
    })


    const inputs = [
        {
            id:1,
            name:"initialPass",
            type: "password",
            placeholder: "password",
            errorMessage:"password should be atleast 8 characters !",
            label: "enter initial password",            required:true,
            pattern:"[A-Za-z0-9]{8,16}",


        },
        {
            id:2,
            name:"newPass",
            type: "password",
            placeholder: "password",
            errorMessage:"password should be 8-20 characters ",
            label: "Enter new Password",
            pattern: "[A-Za-z0-9]{8,16}",
            required:true

        },
        {
            id:3,
            name:"confirmNewPass",
            type: "password",
            placeholder: "password",
            errorMessage: "passwords don't match!",
            label: "confirm new Password",
            pattern: values.newPass,
            required:true

        }
    ]

    const onChange = (e)=>{
        setValues({...values,[e.target.name]: e.target.value })
    }
    
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        navigate('/admin')
    }
    return(
        <div  className='signin' >
            <div className='signin__left' >
            <Logo/>
            {
                        loading?
                        <ClipLoader className="loader" color={'red'} loading={loading}  size={50} />
                        : 
                <motion.div animate={{width:"100%", opacity:"1"}} initial={{width:0, opacity:0}} transition={{delay: .3}} exit={{X:'0'}} className='signin__left-content'>
                    <h1>Reset Password</h1>
                    <form onSubmit={handleSubmit}>
                    {inputs.map((input) => 

                        <FormInput key={input.id}  {...input}  value={values[input.name]} onChange={onChange} />
                        )}
                        
                        <button id="button__primary" >Update</button>
                        <p className="small-btn" onClick={handleSubmit}>skip for now?</p> 
                    </form>
                </motion.div>
            }
            </div>
            
            <div className='signin__right'>
                {/* <RightImage image={rightImage}/> */}

            </div>
        </div>   )
}

export default ResetPass