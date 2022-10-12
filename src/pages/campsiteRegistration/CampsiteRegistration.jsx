import React from 'react'
import { useState } from 'react'
import "./campsiteRegistration.css"
import FormInput from '../../components/formInput/FormInput'
import NavLogo from '../../components/navLogo/NavLogo'

const CampsiteRegistration = () => {
    const [values, setValues] = useState({
        campsitename: "",
        locationaddress:"",
        description:"",
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
            "Location address should be 3-16 characters and shouldn't include any special character!",
          label: "Location Address",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
     }
     ,
     {
        id: 3,
          name: "description",
          type: "text",
          placeholder: "Description",
          errorMessage:
            "Provide a description",
          label: "Description",
          pattern: "^[A-Za-z0-9]{3,16}$",
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
            <button className='mybutton'>Request</button>
          </form>
        </div>
    </div>
  )
}

export default CampsiteRegistration