
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",  
  },
});

const mailOptions = {
  from: "your-email@gmail.com", 
  to: "your-email@gmail.com",  
  subject: "Test Email from Node.js",
  text: "Hello from Node.js!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Email sent: " + info.response)
  }
})
