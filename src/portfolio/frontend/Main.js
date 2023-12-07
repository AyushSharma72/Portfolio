import React, { Suspense } from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from './home'
import NAvbar from "./navbar"
import "./responsive.css"
import Techno from "./technohacks"
import Bharat from "./bahrat"
import IMC from "./IMC"
import ScrollButton from './scrolltotop'
const AboutMe = React.lazy(() => import("./aboutMe"))
const Portfolio = React.lazy(() => import("./Portfolio"))
const ContactMe = React.lazy(() => import("./contactMe"))
const Assignment = React.lazy(() => import("./Assignment"))
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

                    <Route path="/Assignment" element={
                        <Suspense fallback={<div>Loading Page....</div>}>
                            <Assignment />
                        </Suspense>}>
                    </Route>

                    <Route path="/TechnoCertificate" element={<Techno />}></Route>
                    <Route path="/BharatCertificate" element={<Bharat />}></Route>
                    <Route path="/MuncipleCertificate" element={<IMC />}></Route>
                    <Route path="/*" element={<h1 style={{ marginTop: "10rem", color: "red", textAlign: "center" }}>Error 404</h1>} ></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Start 