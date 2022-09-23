import { useState } from "react";

const FormInput = (props)=> {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, onChange, id, ...inputProps} = props

    const handleFocus = (e)=>{
        setFocused(true);
    }
    return (  
        <div className='form__input-wrap'>
            <label id="input__label" >{label} </label>
            <input id="form__input" {...inputProps}  onChange={onChange} onBlur={handleFocus} focused ={focused.toString()} onFocus={()=>inputProps.name==="confirmNewPass" && setFocused(true)} />
            <span id="error__message" >{errorMessage} </span>
        </div>
    );
}

export default FormInput;