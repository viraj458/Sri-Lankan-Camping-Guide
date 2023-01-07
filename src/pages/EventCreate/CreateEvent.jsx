import { useState } from "react";
import React from 'react';
import "./CreateEvent.css";
import DragDrop from "../../components/DragPhoto/dragphoto";
import EventFormInput from "../../components/CreateEvent/EventFormInput";
import NavLogo from '../../components/navLogo/NavLogo';


const CreateEvent = () => {
  const [values, setValues] = useState({
    event_name: "",
    email: "",
    event_location:"",
    starting_date: "",
    starting_time: "",
    ending_date: "",
    ending_time: "",
    
  });

  const [ eventphoto, seteventphoto] = useState([]);
  const [text, setText] = useState('Type');
  const[event,setevent] = useState('Type');
  

  const inputs = [
    {
      id: 1,
      name: "event_name",
      type: "text",
      placeholder: "Event Name",
      errorMessage:
        "Event Name should be 3-16 characters and shouldn't include any special character!",
      label: "Event Name",
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
      name: "event_location",
      type: "text",
      placeholder: "Event Location",
      errorMessage:
        "Event Location should be 3-16 characters and shouldn't include any special character!",
      label: "Event Location",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    
 
    {
      id: 4,
      name: "starting_date",
      type: "date",
      placeholder: "Starting Date",
      label: "Starting Date",
      required: true,
    },

    {
      id: 5,
      name: "starting_time",
      type: "time",
      placeholder: "Starting Time",
      label: "Starting Time",
      required: true,
    },
   

    {
      id: 6,
      name: "ending_date",
      type: "date",
      placeholder: "Ending Date",
      label: "Ending Date",
      required: true,
    },

    {
      id: 7,
      name: "ending_time",
      type: "time",
      placeholder: "Ending Time",
      label: "Ending Time",
      required: true,
    },
    
   
  ];

  const onChange = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]:value});
    
  }

  const handleChange3 = (files)=>{
    for(const file of files){
      const reader = new FileReader();

      reader.onload = () => {
        const base64 = reader.result;
  
        const _ = eventphoto
        _.push(base64)
        seteventphoto(_)
      } 
      reader.readAsDataURL(file)
      }
      console.log(eventphoto); 


    };
  

  const handleSubmit = async(e) => {
    e.preventDefault();

    const{
      event_name,
    email,
    event_location,
    starting_date,
    starting_time,
    ending_date,
    ending_time} = values

    const res = await fetch("http://localhost:5000/api/v1/event",{
        method:"POST",
        // crossDomain:true,
        headers:{"Content-Type":"application/json"
        },
        body:JSON.stringify({ 
          event_name,
          email,
          event_location,
          starting_date,
          starting_time,
          ending_date,
          ending_time,
          event_category:event,
          description:text,
          addphoto:eventphoto
          
        }) 
    })
    const data = await res.json()





    if(data.status === 422 || !data){
      console.log('invalid registration');
    }else{
      console.log('Successfull')
      console.log(data);

    }
  };
 

  return (
    <div className="eventcreatepage"><NavLogo/>
    <div className="eventfullform">
         
      <form method ='POST' className="eventform" >
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
        <select value ={event} onChange={(e) =>setevent(e.target.value)} >
          <option value="Adventure Camping">Adventure Camping</option>
          <option value="Beach Camping">Beach Camping</option>
          <option value="Jungle Camping">Jungle Camping</option>
          <option value="Luxury Camping">Luxury Camping</option>
          <option value="River Camping">River Camping</option>
          <option value="Birdwatching Camping">Birdwatching Camping</option>
        </select>

        <label><br/><br/>Description<br/></label>
        <textarea value={text} 
             onChange={(e) => setText(e.target.value) }> </textarea>
        
        <h4>Add Photos or drag and drop</h4>
        <DragDrop handleChange={handleChange3}/>
        <button className='eventbutton' onClick={handleSubmit}>Request</button>
      </form>
    </div>
    </div>
  );
};

export default CreateEvent;
