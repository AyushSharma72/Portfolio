import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import netflix from "./assets/netflix.png"
import Weather from "./assets/weather.png"
import quiz from "./assets/quiz.png"
import flicker from "./assets/flicker.png"
import code from "./assets/code.png"
import fossils from "./assets/fossils.png"
import Lucky from "./assets/luckydraw.png"
import Resume from "./assets/resuembuilderphoto.jpeg"
import { HiExternalLink } from "react-icons/hi"
import "./PortFolio.css"

const SimpleCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="carousel-container">
                <Slider {...settings}>


                    <div className="ImageParent">
                        <img src={Lucky} className="Images" alt="LuckyDraw Image" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Lucky Draw Website using MERN  <br></br>developed for IMC indore <br></br>LinkedIn post link
                                <a href="https://www.linkedin.com/posts/ayush-sharma-a155a8267_intership-imc-activity-7124027220016193536-o7Mo?utm_source=share&utm_medium=member_desktop"><HiExternalLink /></a></p>

                        </div>
                    </div>


                    <div className="ImageParent">
                        <img src={Resume} className="Images" alt="ResumeBuilderApp" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Resume builder Website Using React js <br></br>You can also create and download your resume here
                                <br></br>Live Link <a href="https://resumebuilder-cpgy.onrender.com/"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="ImageParent">
                        <img src={code} className="Images" alt="Editor" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Code Editor which supports <br></br> python,C++ and java languages
                                <br></br>Live Link <a href="https://reactcodecompiler.onrender.com"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="ImageParent">
                        <img src={Weather} className="Images" alt="Weather App" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Weather showing app
                                <br></br>Live Link <a href="https://weatherapp-573r.onrender.com"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>


                    <div className="ImageParent">
                        <img src={flicker} className="Images" alt="Flicker" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}  >Home page of <a href="https://www.flickr.com/photos/tags/flicker/" style={{ color: "white" }}>Flicker Website</a>
                                <br></br> Source Code Link <a href="https://github.com/AyushSharma72/flikr-landing-page"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>



                    <div className="ImageParent">
                        <img src={netflix} className="Images" alt="NetflixPage" loading="lazy"></img>
                        <div className="layer"     >
                            <p className="font" style={{ fontWeight: "700" }}>NetFlix Clone
                                <br></br>Source Code  Link <a href="https://github.com/AyushSharma72/netflix-clone-html-css-and-js"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="ImageParent">
                        <img src={quiz} className="Images" alt="QuizApp" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700" }}>Quiz App
                                <br></br>Live Link <a href="https://ayushsharma72.github.io/quiz-app-using-html-css-and-javascript/"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>

                    <div className="ImageParent">
                        <img src={fossils} className="Images" alt="Fossils" loading="lazy"></img>
                        <div className="layer">
                            <p className="font" style={{ fontWeight: "700", textAlign: "center" }}>Frontend Clone of Fossils Website
                                <br></br>Source Code  Link <a href="https://github.com/AyushSharma72/fossils-website-clone"><HiExternalLink className="ExternalLink" /></a>
                            </p>
                        </div>
                    </div>



                </Slider>
            </div>
        </div>
    )
};

export default SimpleCarousel;





















