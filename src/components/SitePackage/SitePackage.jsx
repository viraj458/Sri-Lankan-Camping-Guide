import './sitePackage.css'
import {useState} from 'react'
import { Link } from "react-router-dom";
//import FormInput from '../../../components/formInput/FormInput';
// import NavLogo from '../../../components/navLogo/NavLogo';

const SitePackage = () => {
//   const [values, setValues] = useState({
//     package1price:"",
//     package2price:"",
//     package3price:""
//   });
  
// const[package1value,setpackage1value] = useState([])
// const[package2value,setpackage2value] = useState([])
// const[package3value,setpackage3value] = useState([])


//   const inputs =[
// {
//       id: 1,
//       name: "package1price",
//       type: "String",
//       value: "Price",
//       required:true
//  },
//  {
//     id: 2,
//     name: "package2price",
//     type: "String",
//     value: "Price"
// },
// {
//     id: 3,
//     name: "package3price",
//     type: "String",
//     value: "Price"
// }
//   ];
//   const onChange = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;
//     setValues({ ...values, [name]:value});
    
//   }

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     const{
//       package1price,
//     package2price,
//     package3price
//       } = values
       


//       const res = await fetch("http://localhost:5000/api/v1/package",{
//       method:"POST",
//       // crossDomain:true,
//       headers:{"Content-Type":"application/json"
//       },
   
//       body:JSON.stringify({
        
//         package1:package1value,
//         package1price,
//         package2:package2value,
//         package2price,
//         package3:package3value,
//         package3price
        
//       }
//       )
        
//     })
//     const data = await res.json()

//     if(data.status === 422 || !data){
//       console.log('invalid login');
//     }else{
//       console.log('Successfull')
//       console.log(data);

//     }
//   };

//   return (
//     <div className='regPage'>
//     {/* <NavLogo/> */}
//       <div className="fullForm">
//       <form method='POST' className="regForm" >
//           <h1>Packages</h1>
//           {/* {inputs.map((input) => (
//             // <FormInput
//             //   key={input.id}
//             //   {...input}
//             //   value={values[input.name]}
//             //   onChange={onChange}
             
//             // />
//           ))} */}
//          <label><br/><b>Package 1</b><br/></label>
//         <div className="chkContainer">
//             <input type="checkbox" value={package1value} onChange={(e) =>setpackage1value(e.target.value)}/>Campsite
//             {/* <input type="checkbox"  value={package1value} onChange={(e) =>setpackage1value(e.target.value)}/>Tent
//             <input type="checkbox"  value={package1value} onChange={(e) =>setpackage1value(e.target.value)}/>Grill
//             <input type="checkbox"  value={package1value} onChange={(e) =>setpackage1value(e.target.value)}/>Light */}
//             <br /><input name="package1price"/>
//         </div>
        

//         {/* <label><br/><b>Package 2</b><br/></label>
//         <div className="chkContainer">
//             <input type="checkbox"  value={package2value} onChange={(e) =>setpackage2value(e.target.value)} />Campsite
//             <input type="checkbox" value= {package2value} onChange={(e) =>setpackage2value(e.target.value)}/>Tent
//             <input type="checkbox" value= {package2value} onChange={(e) =>setpackage2value(e.target.value)}/>Grill
//             <input type="checkbox" value={package2value} onChange={(e) =>setpackage2value(e.target.value)} />Light
//             <br /><input name="package2price"/>
//         </div>
       

//         <label><br/><b>Package 3</b><br/></label>
//         <div className="chkContainer">
//             <input type="checkbox"  value={package3value} onChange={(e) =>setpackage3value(e.target.value)} />Campsite
//             <input type="checkbox"  value={package3value} onChange={(e) =>setpackage3value(e.target.value)} />Tent
//             <input type="checkbox"  value={package3value} onChange={(e) =>setpackage3value(e.target.value)} />Grill
//             <input type="checkbox"  value={package3value} onChange={(e) =>setpackage3value(e.target.value)} />Light
//             <br /><input name="package3price"/>
//         </div>
//          */}
        
//           <button className='mybutton' onClick={handleSubmit}>Done</button>
//         </form>
//       </div>
//   </div>
//   )
// }

const getFormattedPrice = (price) => `${price.toFixed(2)}Rs`;


const toppings = [
  {
    name: "Campsite",
    price: 1000
  },
  {
    name: "Tent",
    price: 800
  },
  {
    name: "Gril",
    price:200 
  },
  {
    name: "Light",
    price: 200
  }]

  // const [values, setValues] = useState({
  //   onlyCampsite: "",
  //   Tent: "",
  //   Gril:"",
  //   Light: "",
    
  // });
  
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const {
      onlyCampsite,
      Tent,
      Gril,
      Light,
      
    }=toppings
    

    const res = await fetch("http://localhost:5000/api/v1/package",{
      method:"POST",
      // crossDomain:true,
      headers:{"Content-Type":"application/json"
      },
      body:JSON.stringify({ 
        onlyCampsite,
        Tent,
        Gril,
        Light,
        Total:total,
        
      })})

      const data = await res.json()

      
    if(data.status === 422 || !data){
      console.log('invalid registration');
    }else{
      console.log('Successfull')
      console.log(data);

    }
  };

  return (
    <div  className="App123">
      <h3>Add Package</h3>
      <div method="POST" className="list1"><ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    //value={values} onChange={(e) => setValues(e.target.value) }
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)} 
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
            <Link to="/"><button className='mybutton'>Done</button></Link>
          </div>
        </li>
      </ul></div>
    </div>
  );
}
export default SitePackage