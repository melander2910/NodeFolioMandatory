// const routes = (app) => {
//     app.route("/api/contact")

//         .post((req, res) => {

//             const contactForm = document.getElementById("contactForm");
//             let name = document.getElementById("name");
//             let email = document.getElementById("email");
//             let subject = document.getElementById("subject");
//             let message = document.getElementById("message");

//             contactForm.addEventListener("submit", (e) => {
//                 e.preventDefault();
//                 let formData = {
//                     name: name.value,
//                     email: email.value,
//                     subject: subject.value,
//                     message: message.value
//                 }
//                 console.log(formData);
//             })
//             res.redirect("/");
//         });
// }



// module.exports = routes