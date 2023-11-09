import React from 'react'
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Home from './home'
import NAvbar from "./navbar"
import AboutMe from "./aboutMe"
import "./responsive.css"
import Portfolio from "./Portfolio"
import Techno from "./technohacks"
import Bharat from "./bahrat"
import IMC from "./IMC"
import ContactMe from "./contactMe"
import ScrollButton from './scrolltotop'
import Resumeunaviliable from './resumeunaviliable'
function Start(){
    return(
        <div>
            <BrowserRouter>
            <NAvbar/>
            <ScrollButton/>
            <Routes>
            
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/About" element={<AboutMe/>}></Route>
            <Route path="/Contact" element={<ContactMe/>}></Route>
            <Route path="/TechnoCertificate" element={<Techno/>}></Route>
            <Route path="/BharatCertificate" element={<Bharat/>}></Route>
            <Route path="/MuncipleCertificate" element={<IMC/>}></Route>
            <Route path="/Unavailable" element={<Resumeunaviliable/>}></Route>
            <Route path="/*" element={<h1 style={{marginTop:"10rem",color:"red",textAlign:"center"}}>Error 404</h1>} ></Route>
            
            </Routes>
            </BrowserRouter>
            </div>
    )
}

export default Start 