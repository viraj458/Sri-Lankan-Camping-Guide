import './CamperLogin.css'
import {useState} from 'react'
import FormInput from '../../../components/formInput/FormInput';
import NavLogo from '../../../components/navLogo/NavLogo';

const CamperLogin = () => {
  const [values, setValues] = useState({
    email:"",
    password:"",
  });
  const inputs =[
    {
      id: 1,
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
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Provide correct password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
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
          <h1>Camper Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='mybutton'>Sign In</button>
        </form>
      </div>
  </div>
  )
}

export default CamperLogin