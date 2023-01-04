import { useState } from "react";
import "./CreateEvent.css";
import DragDrop from "../../components/DragPhoto/dragphoto";
import EventFormInput from "../../components/CreateEvent/EventFormInput";
import NavLogo from '../../components/navLogo/NavLogo';

const CreateEvent = () => {
  const [values, setValues] = useState({
    EventName: "",
    email: "",
    StartingDate: "",
    StartingTime: "",
    EndingDate: "",
    EndingTime: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "eventname",
      type: "text",
      placeholder: "Event Name",
      errorMessage:
        "Event Name should be 3-16 characters and shouldn't include any special character!",
      label: "Event Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

   
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

 
    {
      id: 4,
      name: "Startingdate",
      type: "date",
      placeholder: "Starting Date",
      label: "Starting Date",
      required: true,
    },

    {
      id: 5,
      name: "StartingTime",
      type: "time",
      placeholder: "Starting Time",
      label: "Starting Time",
      required: true,
    },
   

    {
      id: 6,
      name: "Endingdate",
      type: "date",
      placeholder: "Ending Date",
      label: "Ending Date",
      required: true,
    },

    {
      id: 7,
      name: "EndingTime",
      type: "time",
      placeholder: "Ending Time",
      label: "Ending Time",
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
    <div><NavLogo/>
    <div className="eform">   
      <form onSubmit={handleSubmit}>
        <h1>Create Event</h1>
        {inputs.map((input) => (
          <EventFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <label><br/>Event Category<br/></label>
        <select>
          <option value="Beach Camping">Beach Camping</option>
          <option value="River Camping">River Camping</option>
          <option selected value="River Camping">River Camping</option>
          <option value="River Camping">River Camping</option>
        </select>

        <label><br/><br/>Description<br/></label>
        <textarea > </textarea>
        
        <h4>Add Photos or drag and drop</h4>
        <DragDrop/>
        <button>Request</button>
      </form>
    </div>
    </div>
  );
};

export default CreateEvent;
