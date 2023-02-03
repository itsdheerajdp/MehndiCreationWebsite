import React from 'react'
import './NavBar.css';
export default function NavBar() {

  return (
    <nav id="navbar" className='fixed-top NavBar'>
        <div id="logo" className='logo name_web glow"'><span><h1>Sonam Creation</h1></span></div>
        <div className="head">
            <ul>
                <li className="box"> <a href="/">Home</a></li>
                <li className="box"><a href="/aboutus">About</a></li>
                <li className="box"><a href="/blog">Blog</a></li>
                <li className="box"><a href="/contactus">Contact</a></li>
            </ul>
        </div>

    </nav>



  )
}
