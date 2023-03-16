import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <h4>Joseph Bruno</h4>
      <section className="header-links">
        <Link to="/">Home</Link>
        <a href="#portfolio">Portfolio</a>
        <a href="#technologies">Technologies</a>
        <a href="#contact">Contact Me</a>
      </section>
    </header>
  );
}

export default Header;