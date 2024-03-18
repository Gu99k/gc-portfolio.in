//  menubar
const menuBar = document.querySelector("#menubar");
const menuItem = document.querySelector(".menu-item");
const menuBarClose = document.querySelector("#menubar-close");

menuBar.addEventListener("click", () => {
  // menuItem.style.width = "200px";
  menuItem.style.display = "block";
  menuBar.style.display = "none";
  menuBarClose.style.display = "block";
});

menuBarClose.addEventListener("click", () => {
  menuItem.style.display = "none";
  menuBar.style.display = "block";
  menuBarClose.style.display = "none";
});

// animation text changing js code
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    string: ["Youtuber", "Web Developer", "Programmer", "UI UX Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  };
  const multiTextElement = document.querySelector(".multi-text");
  let currentTextIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    const fullText = options.string[currentTextIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    multiTextElement.textContent = currentText;
    let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 1;
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === "") {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.string.length;
    }
    setTimeout(type, typeSpeed);
  }
  type();
});
// ===============Working contact form ===========================================
const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject");
const submitForm = document.querySelector("#myform");

function sendEmail() {
  const bodyMessage = `Name : ${Name.value} <br> Email : ${email.value} <br> Contact : ${number.value} <br> Message : ${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ravi986745@gmail.com",
    Password: "EC2D6EA9294782FDA495799AE923AF11EC30",
    To: "ravi986745@gmail.com",
    From: "ravi986745@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}
function checkInput() {
  const items = document.querySelectorAll(".input-data");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
  if (
    !Name.classList.contains("error") &&
    !email.classList.contains("error") &&
    !number.classList.contains("error") &&
    !message.classList.contains("error") &&
    !subject.classList.contains("error")
  ) {
    sendEmail();
    submitForm.reset();
    return false;
  }
});
