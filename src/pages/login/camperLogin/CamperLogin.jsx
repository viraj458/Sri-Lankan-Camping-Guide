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


      const onChange = (e) => {
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
      setValues({ ...values, [name]:value});
      
    }

    const handleSubmit = async(e) => {
      e.preventDefault();

      const { email, password } = values

        const res = await fetch("http://localhost:5000/api/v1/login",{
        method:"POST",
        // crossDomain:true,
        headers:{"Content-Type":"application/json"
        },
     
        body:JSON.stringify({
          
          email,
          password
        }
        )
          
      })
      const data = await res.json()

      if(data.status === 422 || !data){
        console.log('invalid login');
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
          <h1>Camper Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='mybutton'onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
  </div>
  )
}

export default CamperLogin