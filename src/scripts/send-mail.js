const sendMail = (recaptchaToken) => {
  const contactForm = document.getElementById("contact-form")

  const nameInput = contactForm.querySelector('[name="name"]')
  const emailInput = contactForm.querySelector('[name="email"]')
  const messageInput = contactForm.querySelector('[name="message"]')

  if (!nameInput.checkValidity() || !emailInput.checkValidity() || !messageInput.checkValidity())
    return

  contactForm.reset()

  const params = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
    'g-recaptcha-response': recaptchaToken
  }

  emailjs.send("default_service", "template_25vyieb", params)
    .then(() => {
      alert("Thanks for your email!")
    }).catch(err => {
      console.error(err)
      alert(`Something went wrong! ${err.text}`)
    }).finally(() => {
      localStorage.removeItem('g-recaptcha')
    })
}

export { sendMail };