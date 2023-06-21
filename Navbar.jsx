import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";
function Navbar() {
   let n=useNavigate();
   function GoHome(){
     n('/Login')
   }
   function Signup(){
     n('/SignupForm')
   }
   function Home(){
     n('/Navbar')
   }
   function Ride(){
     n('/Ride')
   }
   function Services(){
     n('/Content')
   }
   function About(){
     n('/About')
   }
   function Reviews(){
     n('/Footer')
   }
  
    const [isActive, setIsActive] = useState(false)
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header>
                <a href="#" className="logo">
                    <img
                        src="https://thumbs.dreamstime.com/z/car-service-logo-design-template-h-gear-automobile-repair-maintenance-assistance-spare-parts-services-isolated-vector-161663619.jpg"
                        alt="" />
                </a>

                <div className={`bx bx-menu ${isActive ? 'bx-x' : ''}`}
                onClick={toggleNavbar} id="menu-icon"></div>
                <ul className={`navbar ${isActive ? 'active' : ''}`}>
                    <li><a onClick={Home}>Home</a></li>
                    <li><a onClick={Home}>view</a></li>
                    <li><a onClick={Ride}>Ride</a></li>
                    <li><a onClick={Services}>Services</a></li>
                    <li><a onClick={About}>About</a></li>
                    <li><a onClick={Reviews}>Reviews</a></li>
                </ul>
                <div className="header-btn">
                    <a  className="sign-up" onClick={Signup}>Sign Up</a>
                    <a  className="sign-in" onClick={GoHome}>Sign In</a>
                </div>
            </header>
            <section className="home" id="home">
                <div className="text">
                    <h1><span>Looking</span> to <br />rent a car</h1>
                   
                </div>
            </section>
            
        </>
    )
}

export default Navbar