import './CampsiteLogin.css'
import {useState} from 'react'
import FormInput from '../../../components/formInput/FormInput';
import NavLogo from '../../../components/navLogo/NavLogo';

const CampsiteLogin = () => {
  const [values, setValues] = useState({
    business_registration_number:"",
    password:"",
  });
  const inputs =[
    {
      id: 1,
      name: "business registration number",
      type: "text",
      placeholder: "Business registration number",
      errorMessage: "Provide valid business registration number!",
      unique: true,
      label: "Business registration number",
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
          <h1>Campsite Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='mybutton'>Login</button>
        </form>
      </div>
  </div>
  )
}

export default CampsiteLogin