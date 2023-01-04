import React from 'react'
import { useState } from 'react'
import "./campsiteRegistration.css"
import FormInput from '../../components/formInput/FormInput'
import NavLogo from '../../components/navLogo/NavLogo'
import DragDrop from "../../components/DragPhoto/dragphoto";

const CampsiteRegistration = () => {
    const [values, setValues] = useState({
        campsite_name: "",
        location_address:"",
        business_registration_number:"",
        description:"",
        phone_number:"",
        password:"",
        photos_of_location:"",
        photos_of_legal_docs:"",


      });

    const inputs =[
     {
        id: 1,
          name: "campsitename",
          type: "text",
          placeholder: "Campsite Name",
          errorMessage:
            "Campsite name should be 3-16 characters and shouldn't include any special character!",
          label: "Campsite Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
     }
     ,
     {
        id: 2,
          name: "locationaddress",
          type: "text",
          placeholder: "Location Address",
          errorMessage:
            "Enter location address",
          label: "Location Address",
          required: true,
     }
     ,
     {
      id: 3,
        name: "business_registration_number",
        type: "text",
        placeholder: "Business Registration Number",
        errorMessage:
          "Enter the business registration number",
        label: "Business Registration Number",
        required: true,
      },
    {
      id: 4,
        name: "description",
        type: "text",
        placeholder: "Description",
        errorMessage: "Enter a description",
        label: "Description",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
     },
     {
      id: 5,
      name: "phonenumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage:
        "Enter phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
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
            <h1>Campsite Registration</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <h4>Photos of campsite</h4>
            <DragDrop />
            <h4>Photos of legal documents</h4>
            <DragDrop />
            <button className='mybutton'>Register</button>
          </form>
        </div>
    </div>
  )
}

export default CampsiteRegistration