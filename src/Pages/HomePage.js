import React from 'react'
import NavBar from './HomePageComponents/NavBar'
import SlideShow from './HomePageComponents/SlideShow'
import './HomePage.css';
import HomePageContent from './HomePageComponents/HomePageContent';
export default function HomePage() {
  return (
    <div className='HomePage'>
  
    <div className="Nav"> <NavBar/></div>
   <div className="Slide"> <SlideShow/></div>
     
     <div className="quotes"><HomePageContent/></div>
    
    </div>
  )
}
