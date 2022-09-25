import React from 'react';
import { useState } from "react";
import "./ownerRegistrationForm.css";
import FormInput from "../../../components/formInput/FormInput";
import NavLogo from '../../../components/navLogo/NavLogo';


const RegistrationForm = () => {

    const [values, setValues] = useState({
        firstname: "",
        lastname:"",
        address:"",
        NIC:"",
        phonenumber:"",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "firstname",
          type: "text",
          placeholder: "First Name",
          errorMessage:
            "Firstname should be 3-16 characters and shouldn't include any special character!",
          label: "First Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 1,
          name: "lastname",
          type: "text",
          placeholder: "Last Name",
          errorMessage:
            "Lastname should be 3-16 characters and shouldn't include any special character!",
          label: "Last Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 1,
          name: "address",
          type: "text",
          placeholder: "Address",
          errorMessage:
            "Please enter address!",
          label: "Address",
          required: true,
        },
        {
          id: 1,
          name: "NIC",
          type: "text",
          placeholder: "NIC",
          errorMessage:
            "NIC should be 3-16 characters and shouldn't include any special character!",
          label: "NIC",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 1,
          name: "phonenumber",
          type: "text",
          placeholder: "Phone Number",
          errorMessage:
            "Address should be 3-16 characters and shouldn't include any special character!",
          label: "Phone Number",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 2,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <div className='regPage'>
          <NavLogo/>
          <div className="fullForm">
          <form className="regForm" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Next</button>
          </form>
        </div>

        </div>
        
      );
}

export default RegistrationForm