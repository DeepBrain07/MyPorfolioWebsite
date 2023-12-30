// const nodemailer = import('nodemailer')
const myForm = document.getElementById("myForm");
// myForm?.addEventListener("submit", function(event) {
//     event.preventDefault();
//     // const formData = new FormData(event.target);
//     // for (var pair of formData.entries()) {
//     //     console.log(pair[0])
//     // }
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
//     console.log(name, email, subject, message)
// })

// const transporter = nodemailer.createTransport = ({
//     service: 'gmail',
//     auth: {
//         user: 'deepbrain77@gmail.com',
//         pass: 'daniel-07'
//     }
// });
// const mailOptions = {
//     from: 'deepbrain77@gmail.com',
//     to: 'olusatimmie007@gmail.com',
//     subject: 'subject',
//     text: 'text'
// };
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });
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

const opennavbar = document.getElementById("opennavbar");
const closenavbar = document.getElementById("closenavbar");
const navbar = document.getElementById("navbar");
if (opennavbar) {
    opennavbar.onclick = () => {
        opennavbar.style.display = 'none';
        navbar.style.display = 'flex';
    }
}
if (closenavbar) {
    closenavbar.onclick = () => {
        // closenavbar.style.display = 'none';
        navbar.style.display = 'none';
        opennavbar.style.display = 'flex';
    }
}

const namssn_project = document.getElementById("namssn_project");
const namssn_details = document.getElementById("namssn_details");
if (namssn_project) {
    namssn_project.onclick = () => {
        namssn_details.style.display = 'flex';
    }
}

const trackc_project = document.getElementById("trackc_project");
const trackc_details = document.getElementById("trackc_details");
if (trackc_project) {
    trackc_project.onclick = () => {
        trackc_details.style.display = 'flex';
    }
}

const namssn_preview = document.getElementById("namssn_preview");
const namssn_preview_page = document.getElementById("namssn_preview_page");

const trackc_preview = document.getElementById("trackc_preview");
const trackc_preview_page = document.getElementById("trackc_preview_page");

const close_preview = document.getElementById("close_preview");
const close_preview2 = document.getElementById("close_preview2");

if (namssn_preview) {
    namssn_preview.onclick = () => {
        namssn_preview_page.style.display = 'block';
    }
}
if (trackc_preview) {
    trackc_preview.onclick = () => {
        trackc_preview_page.style.display = 'block';
    }
}
if (close_preview) {
    close_preview.onclick = () => {
        namssn_preview_page.style.display = 'none';
    }
}
if (close_preview2) {
    close_preview2.onclick = () => {
        trackc_preview_page.style.display = 'none';
    }
}

const about_b = document.getElementById("about_b");
const projects_b = document.getElementById("projects_b");
const stacks_b = document.getElementById("stacks_b");
const contact_b = document.getElementById("contact_b");
if (about_b && projects_b && stacks_b && contact_b) {
    about_b.onclick = () => {
        // closenavbar.style.display = 'none';
        navbar.style.display = 'none';
        opennavbar.style.display = 'flex';
    }
    projects_b.onclick = () => {
        // closenavbar.style.display = 'none';
        navbar.style.display = 'none';
        opennavbar.style.display = 'flex';
    }
    stacks_b.onclick = () => {
        // closenavbar.style.display = 'none';
        navbar.style.display = 'none';
        opennavbar.style.display = 'flex';
    }
    contact_b.onclick = () => {
        // closenavbar.style.display = 'none';
        navbar.style.display = 'none';
        opennavbar.style.display = 'flex';
    }
}