(function () {
  emailjs.init("o578bwZtNWlSgW3E3");
})();

const sendMail = (recaptchaToken) => {
  const contactForm = document.getElementById("contact-form")

  const nameInput = contactForm.querySelector('[name="name"]')
  const emailInput = contactForm.querySelector('[name="email"]')
  const messageInput = contactForm.querySelector('[name="message"]')
  const params = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
    'g-recaptcha-response': recaptchaToken
  }

  if (!params.name || !params.email || !params.message) return alert("Email information missing! Cannot send email")

  contactForm.reset()

  emailjs.send("default_service", "template_25vyieb", params)
    .then(() => {
      alert("Thanks for your email!")
    }).catch(err => {
      console.error(err)
      alert(`Something went wrong! ${err.text}`)
    })
}