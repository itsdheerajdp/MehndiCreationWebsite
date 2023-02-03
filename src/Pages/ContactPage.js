import React from 'react'
import Footer from './HomePageComponents/Footer'
import NavBar from './HomePageComponents/NavBar'
import './ContactPage.css'
import axios from '../axios.js'
import { useState } from 'react'
export default function ContactPage() {
  let [enteredName,updateName]=useState('');
  let [enteredEmail,updateEmail]=useState('');
  let [enteredNumber,updateNumber]=useState('');
  let [enteredMessage,updateMessage]=useState('');
  function NameChangeHandler(e){
    updateName(e.target.value);
  }
  function EmailChangeHandler(e){
    updateEmail(e.target.value);
  }
  function NumberChangeHandler(e){
    updateNumber(e.target.value);
  }
  function MessageChangeHandler(e){
    updateMessage(e.target.value);
  }
  function SubmitHandler(event){   
    event.preventDefault();
    const url="https://sonamcreationbackend.up.railway.app/contacts"
    let newContact={
      name:enteredName,
      email:enteredEmail,
      number:enteredNumber,
      message:enteredMessage
    }
    axios.post(url,{
      name:enteredName,
      email:enteredEmail,
      number:enteredNumber,
      message:enteredMessage
    }).then(res=>console.log(res.data))
    console.log(newContact)
    updateEmail('')
    updateMessage('')
    updateName('')
    updateNumber('')
  }
  return (
    <div>
      <NavBar/>
       <div className="ContactPageContent"><div className="ContactPage"><form onSubmit={SubmitHandler}>
  <div>
  <img src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-256.png" alt="icon"/>
   </div>
  <input type="text" placeholder="Name (required)" value={enteredName} onChange={NameChangeHandler} required />
  <input type="email" placeholder="email (required)" value={enteredEmail} onChange={EmailChangeHandler} required/>
  <input type="tel" placeholder="Phone Number (required)" value={enteredNumber} onChange={NumberChangeHandler} required/>
  <textarea placeholder="Message (required)" value={enteredMessage} onChange={MessageChangeHandler} required></textarea>
  <input type="submit"/>
</form></div></div>
      <Footer/>
    </div>
  )
}
