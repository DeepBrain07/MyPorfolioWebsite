const nodemailer = import('nodemailer')
const myForm = document.getElementById("myForm");
myForm?.addEventListener("submit", function(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // for (var pair of formData.entries()) {
    //     console.log(pair[0])
    // }
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    console.log(name, email, subject, message)
})

const transporter = nodemailer.createTransport = ({
    service: 'gmail',
    auth: {
        user: 'deepbrain77@gmail.com',
        pass: 'daniel-07'
    }
});
const mailOptions = {
    from: 'deepbrain77@gmail.com',
    to: 'olusatimmie007@gmail.com',
    subject: 'subject',
    text: 'text'
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
const scf = document.getElementById("scf");
const hf = document.getElementById("hf");

if (scf) {
    scf.onclick = () => {
    scf.style.display = 'none';
    hf.style.display = 'flex';
    myForm.style.display = 'block';
    }
}

if (hf) {
    hf.onclick = () => {
    scf.style.display = 'flex';
    hf.style.display = 'none';
    myForm.style.display = 'none';
    }
}