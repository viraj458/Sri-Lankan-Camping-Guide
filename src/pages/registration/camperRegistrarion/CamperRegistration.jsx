import "./camperRegistration.css"
import { useState } from 'react'
import FormInput from '../../../components/formInput/FormInput'
import NavLogo from '../../../components/navLogo/NavLogo'


const CamperRegistration = () => {
  const [values, setValues] = useState({
      name: "",
      username:"",
      email:"",
      password:"",
      confirmpassword:""
    });

  const inputs =[
   {
      id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errorMessage:
          "Provide a name",
        label: "Name",
        required: true,
   },
  
   
   {
    id: 2,
      name: "username",
      type: "text",
      placeholder: "UserName",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "UserName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
 }
 ,
   {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Provide valid email address!",
        unique: true,
        label: "Email",
        required: true,
   }
   ,
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
  
  ];

  
 

  
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
      fetch("http://localhost:5000/api/v1/register",{
        method:"POST",
        crossDomain:true,
        header:{
          "Content-type":"Application/json",
          Accept:"Application/json"
        },
     
        body:JSON.stringify({
          name,
          username,
          email,
          password
        }
        )
          
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"userRegister");
      }).catch((err)=>{
        console.error(err);
      })
    }

return (
  <div className='regPage'>
    <NavLogo/>
      <div className="fullForm">
      <form method = "POST" className="regForm" >
          <h1>Camper Registration</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='mybutton' onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>
  </div>
)
}

export default CamperRegistration;