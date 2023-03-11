import "./index.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>
          {" "}
          Made by Joey Bruno |{" "}
          <a href="mailto: brunojoey12@gmail.com" className="mail">
            Email
          </a>{" "}
          | 2023{" "}
        </p>
        <a href="https://www.github.com/brunojoey" className="github">
          <span className="fa fa-github"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/brunojoey/"
          className="linkedin"
        >
          <span className="fa fa-linkedin"></span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
