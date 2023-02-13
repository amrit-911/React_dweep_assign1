import React from 'react'
import './Header.css';
import logo from './Vector.png';
export default function Header() {
  return ( 
 

    <div class="head">

        <h1>An inspiring design delivered to your inbox every morning</h1>
        <p class="p1">Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
        <p class="p2">Show me how it looks</p>

        <form action="/" class="register-form">
            <input class="input-text" type="text" name="register" placeholder="Your e-mail address"></input>
            <button class="btn" type="submit">Register now</button>
            <p>Free - No Spam - No Data Sharing </p>
        </form>
        <img src={logo} alt="err_person"></img>
    </div>
  )
}
