import React, {useState} from 'react';
import PropTypes from 'prop-types';

const inputStyle = {
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '20%',
    margin: 'auto',
    display: 'block',
    
};
const submitStyle = {
    margin: 'auto',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '20%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};


function Login(props) {
    const [formValues, setFormValues] = useState({user:"", password:""});
    const [validationError, setError] = useState({userError:false, userPassword:false})
    function handleChange(e) {
        const {name, value} = e.target || {};
        const _val = {...formValues};
        _val[name] = value;
        setFormValues(_val);   
                      
    }
    function handleSubmitClick(e) {
        var {user,pass} = validations(formValues);
        const err = {...validationError};
        if(user || pass) {
            if(user) {
                err.userError = true;
            }
            if(pass) {
                err.userPassword = true;
            }
            setError(err);
        } else {
            props.history.push("/profile");
            props.history.state = formValues;
        }  
       
    }
    
    return (
        <div>
           Username <input name="user" type="text" onChange={handleChange} value={formValues.user} className={validationError.userError? "validationError" : "username"} style={inputStyle}/>
           Password <input name="password" type="text" onChange={handleChange} value={formValues.password} className={validationError.userPassword? "validationError" : "password"} style={inputStyle}/>
            <button onClick={handleSubmitClick} style={submitStyle}>Login</button>
        </div>
    )
}   
function validations(values) {
    let errors = {
        user:false,
        pass:false
    };
    if(values.user.length > 7) {
        errors["user"] = true;
    }
    if(values.password.length > 5) {
        errors["pass"] = true;
        
    }
    return errors;
}
Login.propTypes = {

}

export default Login

