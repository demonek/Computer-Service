const express = require("express")
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')
const bodyParser = require("body-parser")
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(process.env.PORT || 3000)

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(( __dirname, "/public/", "index.html" )));
})

app.post('/', (req, res) => {
    const formOutput = `
        <p>New request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.msg}</p>
    `
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.FROM_PASS
        },
    })
    
    let mailOptions = {
        from: `Computer Service Nodemailer <${process.env.FROM_EMAIL}>`,
        to: process.env.TO_EMAIL,
        subject: 'Node contact request',
        html: formOutput
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.redirect('/index.html?error')
            return console.log(error)
        }
        console.log('Message sent: ', info.messageId)
        res.redirect('/index.html?success')
    })
})


