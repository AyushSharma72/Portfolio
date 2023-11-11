const express = require("express")
const cors = require("cors");

const app = express();

app.use(express.json()); // parse the data from frontend
app.use(cors());// for cors error

const nodemailer = require('nodemailer');

app.post("/SubmitForm", async (req, resp) => {
   
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'taskmaster991@gmail.com',
            pass: 'kmepakzcabvztekd',
        },
    });

    const mailOptions = {
        // from:"asharma7588@gmail.com",
        to: 'taskmaster991@gmail.com',  // or asharma7588@gmail.com put any email where we need to send the message
        subject: 'New Connection Form Portfolio',
        text: `
      Name: ${req.body.Name}
      Email: ${req.body.Email}
      Message: ${req.body.Message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email: ' + error);
            // resp.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            resp.status(200).send('Form data sent successfully');
        }
    });
})

app.listen(5000);
