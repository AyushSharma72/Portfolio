import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './home'
import NAvbar from "./navbar"
import "./responsive.css"
import Portfolio from "./Portfolio"
import Techno from "./technohacks"
import Bharat from "./bahrat"
import IMC from "./IMC"
import ContactMe from "./contactMe"
import ScrollButton from './scrolltotop'
import Resumeunaviliable from './resumeunaviliable'
const AboutMe = React.lazy(() => import("./aboutMe"))
function Start() {
    return (
        <div>
            <BrowserRouter>
                <NAvbar />
                <ScrollButton />
                <Routes>
                    <Route path="/" element={
                    <Suspense fallback={<div>Loading Page....</div>}><Home /></Suspense>}
                    >     
                    </Route>

                    <Route path="/Portfolio" element={
                    <Suspense fallback={<div>Loading Page....</div>}><Portfolio /></Suspense>
                    }>
                    </Route>

                    <Route path="/About" element={
                        <Suspense fallback={<div>Loading Page....</div>}>
                            <AboutMe />
                        </Suspense>
                    } > </Route>

                    <Route path="/Contact" element={
                    <Suspense fallback={<div>Loading Page....</div>}>
                        <ContactMe />
                    </Suspense>}>
                    </Route>
                    <Route path="/TechnoCertificate" element={<Techno />}></Route>
                    <Route path="/BharatCertificate" element={<Bharat />}></Route>
                    <Route path="/MuncipleCertificate" element={<IMC />}></Route>
                    <Route path="/Unavailable" element={<Resumeunaviliable />}></Route>
                    <Route path="/*" element={<h1 style={{ marginTop: "10rem", color: "red", textAlign: "center" }}>Error 404</h1>} ></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Start 