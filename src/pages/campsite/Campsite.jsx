import './campsite.css'
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Packages from '../../components/Packages/Packages';
import Footer from '../../components/footer/Footer';


const Campsite = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`http://localhost:5000/api/v1/campsite/find/${id}`);


  const photos = [
    {src:'https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk='},
    {src:'https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk='},
    {src:'https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk='},
    {src:'https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk='},
    {src:'https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk='},
    {src:'https://media.istockphoto.com/id/911995140/photo/camping-tent-in-a-camping-in-a-forest-by-the-river.jpg?s=612x612&w=0&k=20&c=VTK_4PQ1fIRol9S40-3uXjJEve9HwbKOeginDDbpYZk='},
  ]
  return (
    <div>
      <Navbar type='list'/>
      <Header/>
      {loading ? ("Loading") : (
        <>
        <div className="campsiteContainer">
        <div className="campsiteWrapper">
          <h1 className="campsiteTitle">{data.campsite_name}</h1>
          <div className="campsiteAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.location_address}</span>
          </div>
         
          <div className="campsiteImages">
              {data.photos_of_location?.map((photo) => (
                <div className="campsiteImageWrapper">
                  <img
                    src={photo}
                    alt=""
                    className="campsiteImage"
                  />
                </div>
              ))}
            </div>
          <hr />
          <div className="campsiteDetails">
            <h1>Info</h1>
            
            <p>{data.description}</p>
          </div>
          <hr />
          <div className="packageDetails">
            <h1>Packages</h1>
            <Packages/>
          </div>
          <hr />
  
        </div>
        <Footer/>
      </div>
        </>
      ) }
      
      
    </div>
  )
}

export default Campsite