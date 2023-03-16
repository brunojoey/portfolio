
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p>Email</p>
      <a href="mailto: brunojoey12@gmail.com" className="mail">
        <span className="fa fa-envelope"></span>
      </a>{" "}
      <p>| Github</p>
      <a href="https://www.github.com/brunojoey" className="github">
        <span className="fa fa-github"></span>
      </a>
      <p>| LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/brunojoey/"
        className="linkedin"
      >
        <span className="fa fa-linkedin"></span>
      </a>
    </div >
  )
}

export default Contact;