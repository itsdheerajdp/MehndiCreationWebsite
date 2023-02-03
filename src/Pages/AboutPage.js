import React from 'react'
import Footer from './HomePageComponents/Footer'
import NavBar from './HomePageComponents/NavBar'
import AboutHeading from './Headings/AboutHeading'
import './AboutPage.css'
export default function AboutPage() {
  return (
    <div>
      <NavBar/>
      <div className="AboutPageContent"><div className="heading"><AboutHeading/></div>
      <div className="AboutPage">
        <div className="Name_aboutPage"><h1>Here is Sonam</h1></div>
        <div className='cnt'>My name is Sonam, and for over last  half decades I have been adorning brides and inspiring artists with my mehndi designs. A social worker by profession I have always had a very special relationship with doing henna/mehndi. I am a self-taught henna artist practicing this art for the last 7 years and have always been committed to providing artistic, professional services and making my clients experience with henna/mehndi a unique, enjoyable and an unforgettable one.

I was born and raised in India.

This exquisite form of body art is part of my cultural heritage and I am proud to be able to decorate each bride-to-be with a pattern unique to her personality, including motifs that express her inner dreams and desires.

Although proficient in many styles of Henna, I treasure traditional Indian bridal designs, and take exacting care with high degree of detail in my work. I love how the mehndi ceremony fits into the entire celebration of Indian Weddings, and cherish my role as one of many spokes in the wheel, making a couple’s special day truly a memorable occasion. Once I had a parent tell me “Your role is so important in a wedding as it is usually the mehndi ceremony that kicks off the wedding festivities”.

I am currently providing henna services throughout the city Kanpur.

My henna paste is made with 100% natural Henna powder, lemon juice, and essential oils. I do not use “Black henna” because I believe it is unethical and dangerous.

I can do Mehndi/Henna for just about any occasion. I Specialize in Bridal Mehndi, Sangeet Parties, Engagements, Baby Showers, Birthday Parties, Ladies Night outs, School Events, Corporate Events and Fundraisers. I love to extend this art form onto cakes and other mediums like wood, glass and candles.</div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
