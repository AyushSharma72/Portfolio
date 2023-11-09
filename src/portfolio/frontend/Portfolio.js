import React from "react"
import "./PortFolio.css"
import "./responsive.css"
import flicker from "./assets/flicker.png"
import Instagram from "./assets/intagram.png"
import fossils from "./assets/fossils.png"
import backimage from "./assets/smooth-gray-background.jpg"
import netflix from "./assets/netflix.png"
import calc from "./assets/Calculator.jpg"
import quiz from "./assets/quiz.png"
import Resume from "./assets/ayush.png"
import { Link } from "react-router-dom"
import { HiExternalLink } from "react-icons/hi"

function Portfolio() {

    function ShowProjects() {
        const id = document.getElementById("MoreProjects");
        const button = document.getElementById("Seemore")
        id.classList.toggle("show")

        if (button.innerText === "See More") {
            button.innerText = "See Less"
        }
        else {
            button.innerText = "See More"
        }
}

    // function Downloaded() {
    //     const message = setInterval(() => {
    //         alert("Resume Downloaded Succesfully")
    //         clearInterval(message);
    //     }, 2000)

    // }
    return (


        <div>
            <div className="Projects">
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                    <h1 className="Color" style={{fontWeight:"700"}}>Projects</h1>
                </div>
                <div className="ProjectImages" style={{ marginTop: "2rem" }}>

                    <div className="imagedivs">
                        <img src={flicker} style={{ width: "100%", height: "100%" }} />
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}  >Frontend Clone of <a href="https://www.flickr.com/photos/tags/flicker/" style={{ color: "white" }}>Flicker Website</a>
                                <br></br> Source Code Link <a href="https://github.com/AyushSharma72/flikr-landing-page"><HiExternalLink className="ExternalLink" /></a>
                            </p>

                        </div>
                    </div>

                    <div className="imagedivs">
                        <img src={fossils} style={{ width: "100%", height: "100%" }} />
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Frontend Clone of Fossils Website
                                <br></br>Source Code  Link <a href="https://github.com/AyushSharma72/fossils-website-clone"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>

                    </div>

                    <div className="imagedivs">
                        <img src={quiz} style={{ width: "100%", height: "100%" }} />
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700" }}>Quiz App
                                <br></br>Live Link <a href="https://ayushsharma72.github.io/quiz-app-using-html-css-and-javascript/"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="imagedivs">
                        <img src={netflix} style={{ width: "100%", height: "100%" }} />
                        <div className="layer"     >
                            <p className="font" style={{ fontWeight: "700" }}>NetFlix Clone
                                <br></br>Source Code  Link <a href="https://github.com/AyushSharma72/netflix-clone-html-css-and-js"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>


                    <div className="ProjectImages2" id="MoreProjects">

                        <div className="imagedivs2">
                            <img src={Instagram} style={{ width: "100%", height: "100%" }} />
                            <div className="layer">
                                <p className="font" style={{ fontWeight: "700" }}>Instagram Login Page
                                    <br></br>Live Link <a href="https://ayushsharma72.github.io/instagram-login-page/"><HiExternalLink className="ExternalLink" /></a>
                                </p>
                            </div>
                        </div>


                        <div className="imagedivs2">
                            <img src={calc} style={{ width: "100%" }} />
                            <div className="layer">
                                <p className="font" style={{ fontWeight: "700" }}> Calculator
                                    <br></br>Live Link <a href="https://ayushsharma72.github.io/calculator-using-html-css-and-js/"><HiExternalLink className="ExternalLink" /></a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div ></div> {/*placeholder div */}

                <div style={{ padding: "1rem 0rem" }}> <button className="Button" onClick={ShowProjects} id="Seemore">See More</button></div>


            </div>

            <div className="Experience">
                <div className="ExpHeading"><h1 className="Color">Experience</h1></div>

                <ul className="ListofExp">
                    <div className="ExperienceDivs"><li>Intern at Indore Muncipal Corporation's IT Department </li>
                        <Link to="/MuncipleCertificate"><button className="Button">View Certificate</button></Link>
                    </div>
                    <div className="ExperienceDivs" style={{ gap: "7%" }}><li>Completed Web Development Internship from Technohacks</li>
                        <Link to="/TechnoCertificate"><button className="Button">View Certificate</button></Link>
                    </div>
                    <div className="ExperienceDivs" style={{ gap: "6.8%" }}><li>Completed Web Development Internship from Bharat Intern</li>
                        <Link to="/BharatCertificate" ><button className="Button">View Certificate</button></Link>
                    </div>
                </ul>

            </div>
            <div className="Resume">
                <div style={{ width: "80%", display: "flex" }}> <h1 className="Color">Download Resume</h1>
                </div>
                <div style={{ color: "white", width: "80%", display: "flex", gap: "1rem", marginTop: "1rem" }} >
                    {/* <button className="Button" onClick={Downloaded} ><a href="/Unavailable" download="Resume" style={{ color: "black", textDecoration: "none" }} >Download</a></button> */}
                    <button className="Button" ><a href="/Unavailable" style={{ color: "black", textDecoration: "none" }} >Download</a></button>
                </div>

            </div>
            <style>
          {`
          body {
            background-image: url(${backimage});
           
          }
        `}
        </style> 
        </div>

    )
}
export default Portfolio;