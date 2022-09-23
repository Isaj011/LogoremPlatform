import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import FormInput from './form-inputs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Modal = ({open, onClose, onClos}) => {
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
            errorMessage:" name should be atleast 3 characters and not more than 16 characters !",
            label: "enter DB name",
            pattern:"[A-Za-z0-9]{3,16}",
            required:true
        },
        {
            id:2,
            name:"db ip",
            type: "text",
            placeholder: "db ip",
            errorMessage:"enter valid db ip address",
            label: " enter ip address",
            required:true

        },
        {
            id:3,
            name:"domain",
            type: "text",
            placeholder: "domain",
            errorMessage:"enter valid domain name!",
            label: "enter domain ",
            required:true

        }
    ]

        const navigate = useNavigate()
        const handleSubmit = async (e)=>{
            e.preventDefault()
        
            
        }

        const onChange = (e)=>{
            setValues({...values,[e.target.name]: e.target.value })
        }
    if(!open) return null
  return (
    <div className='modal__overlay' onClick={onClos}>
        <div className='modal__container' onClick={(e)=>{
            e.stopPropagation()
        }}>
        <form id="form" >
            <h1>Connect to DB</h1>
                       {inputs.map((input) => 

                        <FormInput key={input.id}  {...input}  value={values[input.name]} onChange={onChange} />
                       )}

                        <button id="button__primary" onClick={onClose} >Connect</button>
                        <p className="close-btn" onClick={onClos}>X</p> 
                        
             
                    </form>
        </div>
    </div>
  )
}

export default Modal