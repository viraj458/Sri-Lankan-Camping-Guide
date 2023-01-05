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
      photos_of_legal_docs:""


      });

    const inputs =[
     {
        id: 1,
          name: "campsite_name",
          type: "text",
          placeholder: "Campsite Name",
          errorMessage:
            "Campsite name should be 3-16 characters and shouldn't include any special character!",
          label: "Campsite Name",
          required: true,
     }
     ,
     {
        id: 2,
          name: "location_address",
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
      name: "phone_number",
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
    

    const onChange = (e) => {
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
      setValues({ ...values, [name]:value});
      
    }

    const handleSubmit = async(e) => {
      e.preventDefault();

      const { 
        campsite_name,
        location_address,
        business_registration_number,
        description,
        phone_number,
        password} = values


        
        const res = await fetch("http://localhost:5000/api/v1/register_campsite",{
        method:"POST",
        // crossDomain:true,
        headers:{"Content-Type":"application/json"
        },
     
        body:JSON.stringify({ 
        campsite_name,
        location_address,
        business_registration_number,
        description,
        phone_number,
        password} 
        )
          
      })
      const data = await res.json()
      // console.log('====================================');
      // console.log({
      //   campsite_name,
      //   location_address,
      //   business_registration_number,
      //   description,
      //   phone_number,
      //   password } );
      // console.log('====================================');
  
      if(data.status === 422 || !data){
        console.log('invalid registration');
      }else{
        console.log('Successfull')
        console.log(data);

      }
    };

  return (
    <div className='regPage'>
      <NavLogo/>
        <div className="fullForm">
        <form method='POST' className="regForm" >
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
            <button className='mybutton' onClick={handleSubmit}>Register</button>
          </form>
        </div>
    </div>
  )
}

export default CampsiteRegistration