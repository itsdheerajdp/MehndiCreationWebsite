import React from 'react'
import Footer from './HomePageComponents/Footer'
import NavBar from './HomePageComponents/NavBar'
import './ServicePage.css'
import ServicesHeading from './Headings/ServicesHeading'
import logo1 from './ServicesPagelogo/logo1.png'
import logo2 from './ServicesPagelogo/logo2.png'
import logo3 from './ServicesPagelogo/logo3.png'
import logo4 from './ServicesPagelogo/logo4.png'
import logo5 from './ServicesPagelogo/logo5.png'
import logo6 from './ServicesPagelogo/logo6.png'

export default function ServicePage() {
  return (
    <div>
      <NavBar/>
      <div className="heading " style={{"margin-top":"14rem"}}><ServicesHeading/></div>
      <div className="ServicePageContent">
      <div className="services">
	<div className="container">
		<div className="row">
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
					<img src={logo1} alt="" />
					<h4>Bridal Mehndi Design</h4>
					<p>Bridal mehndi is a must during Indian weddings. It is a huge part of the ceremony and it is enjoyed by everyone present.</p>
					<a className="readmore" href="https://en.wikipedia.org/wiki/Mehndi"><span>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
        <img src={logo2} alt="" />
					<h4>Indian Mehndi Design</h4>
					<p>

This mehndi design consists of paisleys and meshwork. Along with that it also consists of floral patterns.</p>
					<a className="readmore" href="https://en.wikipedia.org/wiki/Mehndi"><span>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
        <img src={logo3} alt="" />
					<h4>Arabic Mehndi Design</h4>
					<p>Arabic mehndi is preferred by women during bridal ceremonies because it is one of the easiest types of mehndi to apply.

 </p>
					<a className="readmore" href="https://en.wikipedia.org/wiki/Mehndi"><span>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
        <img src={logo4} alt="" />
					<h4>Punjabi Mehndi Design</h4>
					<p>Punjabi mehndi designs are quite unique. They represent the culture very well. Most of the designs in Punjabi mehndi include circles, loops, spirals and so on.

These designs give a good look to the design. Most of the designs also include many colours and glitters.

</p>
					<a className="readmore" href="https://en.wikipedia.org/wiki/Mehndi"><span>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
				<img src={logo5} alt="" />
					<h4>Moroccan mehndi design</h4>
					<p>Moroccan mehndi designs are unique in its own beautiful way and the best part is that it is known for its unisex patterns. The geometric shape, lines, curves along with the tribal designs, the Moroccan mehendi designs have its own irresistible charm and beauty</p>
					<a className="readmore" href="https://en.wikipedia.org/wiki/Mehndi"><span>Read More</span></a>
				</div>
			</div>
			<div className="col-md-6 col-lg-4 mb-3">
				<div className="box p-5"> 
        <img src={logo6} alt="" />
					<h4>Western-style Mehendi Design</h4>
					<p>The western culture has also adapted the mehendi trend, which is obviously not at all linked with their culture or tradition. However, the henna tattoo in western-style mehendi are getting immensely popular</p>
					<a className="readmore" href="https://en.wikipedia.org/wiki/Mehndi"><span>Read More</span></a>
				</div>
			</div>
			
		</div>
	</div>
</div></div>
      <Footer/>
    </div>
  )
}
