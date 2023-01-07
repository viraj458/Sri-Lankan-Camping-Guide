import './campsite.css'
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Packages from '../../components/Packages/Packages';
import Footer from '../../components/footer/Footer';


const Campsite = () => {

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
      <div className="campsiteContainer">
        <div className="campsiteWrapper">
          <h1 className="campsiteTitle">Asiri Campsite</h1>
          <div className="campsiteAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Imaduwa, Galle</span>
          </div>
          <div className="campsiteImages">
            {photos.map(photo=>(
              <div className="campsiteImageWrapper">
                <img src={photo.src} alt="" className="campsiteImage" />
              </div>
            ))}
          </div>
          <hr />
          <div className="campsiteDetails">
            <h1>Info</h1>
            
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.
            </p>
          </div>
          <hr />
          <div className="packageDetails">
            <h1>Packages</h1>
            <Packages/>
          </div>
          <hr />
          <div className="campsiteRules">
              <h1>Rules</h1>
              <div className="rulesInfo">
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis cupiditate placeat magnam accusamus recusandae, provident esse alias tenetur aut distinctio, incidunt in temporibus nihil reiciendis explicabo, dicta dolor unde.</li>
              
              </div>
          </div>
        </div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Campsite