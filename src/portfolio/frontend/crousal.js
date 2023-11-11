import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import netflix from "./assets/netflix.png"
import calc from "./assets/Calculator.jpg"
import quiz from "./assets/quiz.png"
import Resume from "./assets/ayush.png"
import flicker from "./assets/flicker.png"
import Instagram from "./assets/intagram.png"
import fossils from "./assets/fossils.png"
import { HiExternalLink } from "react-icons/hi"
import "./PortFolio.css"

const SimpleCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 3000,
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="ImageParent">
                        <img src={flicker} className="Images" alt="Flicker"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}  >Home page of <a href="https://www.flickr.com/photos/tags/flicker/" style={{ color: "white" }}>Flicker Website</a>
                                <br></br> Source Code Link <a href="https://github.com/AyushSharma72/flikr-landing-page"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="ImageParent">

                        <img src={netflix} className="Images" alt="Netflix"></img>
                        <div className="layer"     >
                            <p className="font" style={{ fontWeight: "700" }}>NetFlix Clone
                                <br></br>Source Code  Link <a href="https://github.com/AyushSharma72/netflix-clone-html-css-and-js"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="ImageParent">
                        <img src={quiz} className="Images" alt="Quiz"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700" }}>Quiz App
                                <br></br>Live Link <a href="https://ayushsharma72.github.io/quiz-app-using-html-css-and-javascript/"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="ImageParent">
                        <img src={fossils} className="Images" alt="Fossils"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Frontend Clone of Fossils Website
                                <br></br>Source Code  Link <a href="https://github.com/AyushSharma72/fossils-website-clone"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="ImageParent">
                        <img src={Instagram} className="Images2" alt="Instagram"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700" }}>Instagram Login Page
                                <br></br>Live Link <a href="https://ayushsharma72.github.io/instagram-login-page/"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="ImageParent">
                        <img src={calc} className="Images2" alt="Calculator"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700" }}> Calculator
                                <br></br>Live Link <a href="https://ayushsharma72.github.io/calculator-using-html-css-and-js/"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
};

export default SimpleCarousel;





















