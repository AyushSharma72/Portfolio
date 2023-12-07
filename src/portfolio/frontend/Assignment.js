import React from "react";
import "./PortFolio.css";
import { HiExternalLink } from "react-icons/hi";
function Assignment() {
    return (
        <div className="Assignment">
            <div className="AssigmentContent">

                <h1 className="Color">CONM <span className="Color2">Assignment</span></h1>

                <div className="Internals">
                    <div className="Subinternals">
                        <h2 className="Color"> 1<sup>st</sup> Internal <span className="Color2">test Set A Solution --</span>  </h2>
                        <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYY71LPlBJuWCxoIJ-oT-_Nd&feature=shared">Youtube Videos link <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                    </div>

                    <div className="Subinternals">
                        <h2 className="Color"> 1<sup>st</sup> Internal <span className="Color2">test Set B Solution --</span>  </h2>
                        <a href="https://youtu.be/D07IlQaIod8?feature=shared">Youtube Videos link <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                    </div>

                    <div className="Subinternals">
                        <h2 className="Color"> 1<sup>st</sup> Internal <span className="Color2">test Set C Solution --</span>  </h2>
                        <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYZmVfTzbg-oYGvDUd69_V0A&feature=shared">Youtube Videos link <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                    </div>

                    <div className="Subinternals">
                        <h2 className="Color"> 1<sup>st</sup> Internal <span className="Color2">test Set D Solution --</span>  </h2>
                        <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYbWuT_pCIVN9lpzPztlydMR&feature=shared">Youtube Videos link <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                    </div>

                    <div className="Subinternals">
                        <h2 className="Color"> 2<sup>nd</sup> Internal <span className="Color2">test  Solutions --</span>  </h2>
                        <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYYLD385GidWRT7KpXZB1D7G&feature=shared">Youtube Videos link <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                    </div>

                    <div className="Subinternals">
                        <h2 className="Color"> 3<sup>rd</sup> Internal <span className="Color2"> test Solutions --</span>  </h2>
                        <a href="https://youtube.com/playlist?list=PLJKCTCcDfUYZGgYDzKDkv36lBRR7rJk3I&feature=shared">Youtube Videos link <HiExternalLink style={{ width: "2rem", height: "1.3rem", color: "blue" }} /></a>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Assignment;