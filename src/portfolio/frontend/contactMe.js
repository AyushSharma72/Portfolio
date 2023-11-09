import React, { useEffect, useState } from "react"
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"
import "./PortFolio.css"
import "./responsive.css"
function Contact() {

    let [Name, Setname] = useState("");
    let [Email, SetEmail] = useState("");
    let [Message, SetMessage] = useState("");
    const [EmailError, setEmailError] = useState(true);
    const [NameError, setNameError] = useState(true);
    const [MessageError, setMessageError] = useState(true);
    let [Send, Setsend] = useState("Send")

    async function HandleSubmit() {
        Setsend("Sending...")
        let result = await fetch("https://contactapi-pa0z.onrender.com/SubmitForm", {
            method: "Post",
            body: JSON.stringify({ Name, Email, Message }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (result) {
            Setsend("Send");
            alert("Message Sent to Ayush succesfully");
        }

    }
    useEffect(() => {
        const Name = document.getElementById("Name")
        const Email = document.getElementById("Email")
        const Message = document.getElementById("Message")
        if (Email.value.trim() === '') {
            setEmailError(true);
        }
        if (Name.value.trim() === '') {
            setNameError(true);
        }
        if (Message.value.trim() === '') {
            setMessageError(true);
        }
    }, [Name, Email, Message])

    function checkEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const Email = document.getElementById("Email")
        if (Email.value.match(regex)) {
            setEmailError(false);
        }
        else {
            setEmailError(true);
        }
    }

    function checkMessage() {
        const Message = document.getElementById("Message")
        if (Message.value.length >= 1) {
            setMessageError(false);
        } else {
            setMessageError(true);
        }
    }

    function checkName() {
        const Name = document.getElementById("Name")
        if (Name.value.length >= 1) {
            setNameError(false);
        }
        else {
            setNameError(true);
        }
    }


    return (
        <div className="ContactME">
            <h1 className="ContactHeading Color">Contact<span className="Color2">Me</span></h1>

            <div className="FormParent">
                <h5 className="font" style={{ marginBottom: "0rem" }}>Please fill out the form to contact me </h5>
                <p className="font" style={{ marginBottom: "0rem", textAlign: "center" }}>(Note: Please fill out all fields to enable button)</p>
                <form className="Form">
                    <input type="text" placeholder="Your Name" id="Name" style={{ width: "100%" }} onChange={(e) => { Setname(e.target.value); checkName(); }} required></input>
                    <input type="email" placeholder="Your Email  (Please enter a valid email)" id="Email" style={{ width: "100%" }} onChange={(e) => { SetEmail(e.target.value); checkEmail(); }} required></input>
                    <textarea rows="8" cols="83" placeholder="Message" id="Message" style={{ width: "100%" }} onChange={(e) => { SetMessage(e.target.value); checkMessage(); }} required ></textarea>
                    <button type="button" className="Button" onClick={HandleSubmit} disabled={EmailError || NameError || MessageError}>{Send}</button>
                </form>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <div className="SocialIcons">
                    <h5 className="Color2">Connect with me on <span className="Color"> social media</span> </h5>
                    <div className="Social"><a href="https://www.linkedin.com/in/ayush-sharma-a155a8267/"><FaLinkedin style={{ color: "white", height: "2rem", width: "2rem" }} /></a><h5 className="font">Ayush Sharma</h5></div>
                    <div className="Social"><a href="https://instagram.com/ayush_s_72?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagramSquare style={{ color: "white", height: "2rem", width: "2rem" }} /></a><h5 className="font">ayush_s_72</h5></div>
                    <div className="SocialGmail" ><BiLogoGmail style={{ color: "white", height: "2rem", width: "2rem" }} /><h5 className="font">asharma7588@gmail.com</h5></div>
                </div>
            </div>

        </div>
    )
}
export default Contact;