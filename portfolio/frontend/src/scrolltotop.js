import React, { useEffect, useState } from "react"
import "./PortFolio.css"
import "./responsive.css"
import { BiSolidUpArrow } from "react-icons/bi"
import { set } from "mongoose"
function ScrollButton() {
    const [visible, setvisible] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setvisible(true)
            }
            else {
                setvisible(false)
            }
        })
    })

    function ScrollToTOP() {
        console.log("hi")
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }

    return (
        <button className="ScrolltoTopButton" onClick={ScrollToTOP} style={{ opacity: visible ? "0.6" : "0" }}><BiSolidUpArrow /></button>
    )
}
export default ScrollButton;