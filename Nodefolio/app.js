const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const dotenv = require("dotenv");
dotenv.config({
    path: "./.env"
})



const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
})

function sendMail(mail) {
    let mailOptions = {
        from: "pdmmailer@gmail.com",
        to: "pdmmailer@gmail.com",
        name: mail.name,
        email: mail.email,
        subject: mail.subject,
        html: mail.email + " || " + mail.name + " || ----------- || " + mail.body
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Email Sent: " + info.response);
        }
    })
}

app.post("/sendMail", (req, res) => {
    mail = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        body: req.body.message
    }
    console.log(mail);
    sendMail(mail)
    res.redirect("/")
})


const projectsRouter = require("./routes/projects");
app.use(projectsRouter.router);

// const routes = require("./public/js/contact");
// routes(app);

const fs = require("fs");
const {
    getMaxListeners
} = require("process");

const header = fs.readFileSync(__dirname + "/public/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer.html", "utf-8");
const frontpage = fs.readFileSync(__dirname + "/public/frontpage.html", "utf-8");

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log("Something bad happened");
    } else {
        console.log("Listening on port: " + PORT);
    }
})