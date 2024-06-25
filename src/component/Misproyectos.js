import { useState } from 'react';
import './Misproyectos.css';
import imagen3 from '../business-admin-imagen.png'
import imagen2 from '../timberli-project.png'
import imagen1 from '../henry-food.png'
import imagen4 from './movieyseries.jpeg'
import imagen5 from './orderapp.jpeg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from './CustomArrowsSlider';
export default function Misproyectos(){
  const [onHover,setOnHover]= useState({on:false, in:null})
    const objProyect=[
       {name:'Movies&SeriesApp',link:"https://expo.dev/artifacts/eas/c63mXaD4p77QbUfT8xdRPs.apk", imagen:imagen4, resumen: "Movies and series app:app developed with react native, expo, firebase.", mobile:true},
       {name:'OrderStoreApp',link:"https://expo.dev/artifacts/eas/jGKgozWyeyWPLzwadd8gYM.apk", imagen:imagen5, resumen: "App to make and manage purchase orders.",  mobile:true},
      {name:'Timberli',link:"https://proyecto-final-orcin-seven.vercel.app/", imagen:imagen2, resumen: "Timberli:   It is a social network where software developers upload and expose their portfolio of projects. The technologies used: React Redux on the frontend and Node.js, Express.js and Sequelize on the backend. Account with authentication (Oauth2.0), Payment method implemented with STRIPE. "}
      ,{name:'BusinesAdmin',link:'https://business-admin.vercel.app/',imagen:imagen3,resumen:"Busines Admin:   Web and mobile app to manage commercial businesses, the main technologies applied are React, React Native with Expo and Firebase. "},
      {name:'Henryfood',link:"https://pi-food-yqzu8pfxg-timberli.vercel.app/",imagen:imagen1,resumen:"HenryFood:   It is a web application where food recipes are created and displayed. The technologies used: React Redux on the frontend and Node.js, Express.js and Sequelize on the backend."}]

      var settings = {
        
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(<>
        <div className='cabezaProyectos'>
          <h1 className='title-mis-proyectos'>My projects </h1>
          <p className='subTitle textProyectos' id='misProyectos'>These are the projects he worked on. I am always willing to learn new technologies and work with new people.</p>
        </div>
        <div className="misproyectos-container"> 
        <Slider {...settings}>
        {objProyect.map((item)=>(
          <a className='card' key={item.name+'1'} href={item.link} target="_blank" onMouseEnter={()=>setOnHover({on:true, in:item.name+'1'})} onMouseLeave={()=>setOnHover({on:false, in:null})}>
            {onHover.on&&<p key={item.name+'1'} className={onHover.in===item.name+'1'?'visitar':'displayNone'}>{item.mobile?'Dowload Apk for android':'Visit web site'}</p>}
            <div className='card-top'>
              <img src={item.imagen} alt={item.name} width={'500px'} height={'250'}/>
              
            </div>
            <div className='card-bottom'>
              <p className='resumenText'>{item.resumen}</p>
            </div>
          </a>
        ))}
        </Slider>
        </div>
        </>
    )
}
// {proyectoHover&&
