import './sitePackage.css'
import {useState} from 'react'
// import FormInput from '../../../components/formInput/FormInput';
// import NavLogo from '../../../components/navLogo/NavLogo';

const SitePackage = () => {
  const [values, setValues] = useState([]);
  

const [checked, setChecked] = useState(false);
  const inputs =[
{
      id: 1,
      name: "package1price",
      type: "String",
      value: "Price"
 },
 {
    id: 2,
    name: "package2price",
    type: "String",
    value: "Price"
},
{
    id: 3,
    name: "package3price",
    type: "String",
    value: "Price"
}
  ];
//   const onChange = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;
//     setValues({ ...values, [name]:value});
    
//   }

  const handleSubmit = async(e) => {
    e.preventDefault();


      const res = await fetch("http://localhost:5000/api/v1/package",{
      method:"POST",
      // crossDomain:true,
      headers:{"Content-Type":"application/json"
      },
   
      body:JSON.stringify({
        
        
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
    {/* <NavLogo/> */}
      <div className="fullForm">
      <form method='POST' className="regForm" >
          <h1>Packages</h1>
          {/* {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              onClick={handleSubmit}
            />
          ))} */}
         <label><br/><b>Package 1</b><br/></label>
        <div className="chkContainer">
            <input type="checkbox" id="pkg" name="pkg" value="Campsite" />Campsite
            <input type="checkbox" id="pkg" name="pkg" value="Tent" />Tent
            <input type="checkbox" id="pkg" name="pkg" value="Grill" />Grill
            <input type="checkbox" id="pkg" name="pkg" value="Light" />Light
            <br /><input type="text" id="price" name="package1price" value="Price"/>
        </div>
        

        <label><br/><b>Package 2</b><br/></label>
        <div className="chkContainer">
            <input type="checkbox" id="pkg" name="pkg" value="Campsite" />Campsite
            <input type="checkbox" id="pkg" name="pkg" value="Tent" />Tent
            <input type="checkbox" id="pkg" name="pkg" value="Grill" />Grill
            <input type="checkbox" id="pkg" name="pkg" value="Light" />Light
            <br /><input type="text" id="price" name="package1price" placeholder="Price" required='true'/>
        </div>
       

        <label><br/><b>Package 3</b><br/></label>
        <div className="chkContainer">
            <input type="checkbox" id="pkg" name="pkg" value="Campsite" />Campsite
            <input type="checkbox" id="pkg" name="pkg" value="Tent" />Tent
            <input type="checkbox" id="pkg" name="pkg" value="Grill" />Grill
            <input type="checkbox" id="pkg" name="pkg" value="Light" />Light
            <br /><input type="text" id="price" name="package1price" placeholder="Price" required='true'/>
        </div>
        
        
          <button className='mybutton' onClick={handleSubmit}>Done</button>
        </form>
      </div>
  </div>
  )
}

export default SitePackage