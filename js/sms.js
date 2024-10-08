
const form = document.querySelector('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const subject = document.getElementById('subject');
const msg = document.getElementById('message');

function sendEmail() {
  const bodyMassage =`Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Massage: ${msg.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "foyssalkhan@gmail.com",
    Password : "9D54697FCA0C07C872B91F82F272C7AB8E90",
    To : 'foyssalkhan@gmail.com',
    From : "foyssalkhan@gmail.com",
    Subject : subject.value,
    Body : bodyMassage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
);
}

// not fill massage show alart error section
function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    // if (items[1].value != "") {
    //   checkEmail();
    // }

    // items[1].addEventListener("keyup", () => {
    //   checkEmail();
    // });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

// Email address Requred Java
// function checkEmail() {
//   const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
//   const errorTextEmail = document.querySelector(".error-text.email")

//   if (!email.value.match(emailRegex)) {
//     email.classList.add("error");
//     email.parentElement.classList.add("error");

//     if (email.value != "") {
//       errorTextEmail.innerText = "Enter a Valid Email Address Small later";
//     }
//     else {
//       errorTextEmail.innerText = "Email make Sure @name.com and small later Format";
//     }
//   }
//   else {
//     email.classList.remove("error");
//     email.parentElement.classList.remove("error");
//   }
// }


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !msg.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
  }
});