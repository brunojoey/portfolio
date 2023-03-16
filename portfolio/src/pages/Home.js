import joeyPhoto from "../images/professional-joey-photo.jpg";
import Contact from "./Contact";
import TechnologyList from "../components/TechnologyList";
import "./index.scss";
import Portfolio from "./Portfolio";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home">
      <h1>Joseph Angelo Bruno</h1>
      <div className="home-info">
        <img src={joeyPhoto} alt="Face of Joey Bruno" width="300px" />
        <p>
          Creative Full Stack Web Developer, certified in ServiceNow System Administration, with
          expertise in User Interface Design and Front End Web Development. History of creating and
          maintaining applications for workflow optimization within a Fortune 500 consulting
          firm and a national educational institution. An excellent communicator and collaborator
          with strengths that include exceptional problem-solving, working well on team-based
          projects, and knowledge of typography.
        </p>
      </div>
      <section className="home-portfolio">
        <Portfolio />
      </section>
      <section className="home-technologies">
        <h2>Utilized Technologies</h2>
        <TechnologyList />
      </section>
      <section className="home-contact">
        <h2>Contact Me</h2>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
