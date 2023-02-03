import './HomePageContent.css';
import './ButtonCSS.css';
import React from 'react'
import MeetHeading from '../Headings/MeetHeading';
import GallaryHeading from '../Headings/GallaryHeading';
import image1 from './HomePageContentImages/image1.png'
import image2 from './HomePageContentImages/image2.png'
import ServicesHeading from '../Headings/ServicesHeading';
import pic1 from './GalleryImages/pic1.jpeg'
import pic2 from './GalleryImages/pic2.jpeg'
import pic3 from './GalleryImages/pic3.jpeg'
import pic4 from './GalleryImages/pic4.jpeg'
import pic5 from './GalleryImages/pic5.jpg'
import pic6 from './GalleryImages/pic6.jpg'
import pic7 from './GalleryImages/pic7.jpeg'
import pic8 from './GalleryImages/pic8.jpg'
import pic9 from './GalleryImages/pic9.jpeg'
import pic10 from './GalleryImages/pic10.jpeg'
import pic11 from './GalleryImages/pic11.jpeg'
import pic12 from './GalleryImages/pic12.jpeg'
import Footer from './Footer';
export default function HomePageContent() {
  return (<div className='Quotess'>
   <div className="heading"><MeetHeading/></div>
   <div className="intro">
    <p>Self taught Henna/Mehndi artist practicing this art for the over 30 years.</p>
    <div><img src={image1} alt="" /></div>
    <div className="btn"> <span><a href="/aboutus"></a></span></div>
   </div>
   <div className="heading"><ServicesHeading/></div>
   <div className="intro">
    <p>We take accountability to provide all kinds of mehndi designs as per client’s desire</p>
    <div><img src={image2} alt="" /></div>
    <div className="btn"> <span><a href="/services"></a></span></div>
   </div>
   <div className="heading"><GallaryHeading/></div>
   <div className="gallery"><div className="wrapper">
   <div className="container">

<div>
    <img src={pic1} alt="bike"/>
</div>

<div>
    <img src={pic2} alt="rose"/>
</div>

<div>
    <img src={pic3} alt="camera"/>
</div>

<div>
    <img src={pic4} alt="road"/>
</div>

<div>
    <img src={pic5} alt="night-1927265_960_720"/>
</div>

<div>
    <img src={pic6} alt="sunset"/>
</div>

<div>
    <img src={pic7} alt="model"/>
</div>

<div>
    <img src={pic8} alt="bird"/>
</div>

<div>
    <img src={pic9} alt="car"/>
</div>

<div>
    <img src={pic10} alt="portrait-3013924_960_720"/>
</div>

<div>
    <img src={pic11} alt="portrait-3013924_960_720"/>
</div>

<div>
                <img src={pic12} alt="rose"/>
</div>

</div>
</div>
</div>
<Footer/>
</div>
  )
}
