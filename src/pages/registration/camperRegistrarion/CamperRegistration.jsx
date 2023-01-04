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
    id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Provide a unique username",
      label: "Username",
      unique: true,
      required: true,
 }
   ,
   {
        id: 2,
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
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
   },
  //  {
  //   id: 5,
  //   name: "confirmPassword",
  //   type: "password",
  //   placeholder: "Confirm Password",
  //   errorMessage: "Passwords don't match!",
  //   label: "Confirm Password",
  //   pattern: values.password,
  //   required: true,
  // }
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
          <h1>Camper Registration</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='mybutton'>Sign Up</button>
        </form>
      </div>
  </div>
)
}

export default CamperRegistration