import React, { useState } from "react"
import { NavLink } from "react-router-dom";// portfolio backimage change 
import "./PortFolio.css"
import "./responsive.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross} from "react-icons/im"

function Navbar() {
  const [slide, setslide] = useState(true);
  function ShowNavBar() {
    if (slide) {
      document.getElementById("Navbar2").style.left = "0rem";
      setslide(false)
    }
    else {
      setslide(true);
      document.getElementById("Navbar2").style.left = "-14rem";
    }
  }



  window.onscroll = function headhide() {
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("navcont").style.height = "0";
      document.getElementById("navlinks").style.opacity="0"
      document.getElementById("name").style.opacity="0"

    }
    if (document.documentElement.scrollTop < 100) {
      document.getElementById("navcont").style.height = "6rem";
      document.getElementById("navlinks").style.opacity="1"
      document.getElementById("name").style.opacity="1"
    }

  }

  return (

    <div className="Navbar"  >
      <div className="HamburgerMenu"><span className="burgerspan"><GiHamburgerMenu style={{ color: "white" }} onClick={ShowNavBar} /> <div ><h2 style={{ paddingLeft: "1rem" }} className="Color">AYUSH<span style={{ marginLeft: "6px ", color: 'white' }}>SHARMA</span></h2></div></span></div>
      <div className="Navbar2" id="Navbar2">
        <span><ImCross onClick={ShowNavBar} className="ImCross"/> </span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="About">About me</NavLink>
        <NavLink to="/Portfolio">Portfolio</NavLink>
        <NavLink to="/Contact">Contact me</NavLink>
      </div>
      <div className="Navbar1" id="navcont">   
        <div className="Myname"  id="name"><h2 style={{ paddingLeft: "1rem" }} className="Color">AYUSH<span style={{ marginLeft: "6px ", color: 'white' }}>SHARMA</span></h2></div>
        <div className="Navlinks" id="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="About">About me</NavLink>
          <NavLink to="/Portfolio">Portfolio</NavLink>
          <NavLink to="/Contact">Contact me</NavLink>

        </div>
      </div>
   </div>

  )
}

export default Navbar;