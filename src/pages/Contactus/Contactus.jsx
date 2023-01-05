import { useState } from "react";
import "./Contactus.css";
import NavLogo from "../../components/navLogo/NavLogo";
import EventFormInput from "../../components/CreateEvent/EventFormInput";



const Contactus = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    Subject: "",
    Sugessions: "",
  
    
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
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
      id: 3,
      name: "subject",
      type: "text",
      placeholder: "Subeject",
      label: "Subject",
      required: true,
    },

    {
      id:4,
      name: "sugession",
      type: "text",
      placeholder: "Sugessions",
      label: "Sugessions",
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
    <div className="contactpage"><NavLogo/>
    <div className="contactfullform">
         
      <form className="contactform" onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        {inputs.map((input) => (
          <EventFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <label><br/><br/><br/></label>
        <textarea > </textarea>
        
        
        <button className='contactbutton'>Send</button>
      </form>
    </div>
   
    </div>
  );
};

export default Contactus;
