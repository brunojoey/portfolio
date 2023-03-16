import colorBlindness from "../images/color-blindness.png";
import thriveTherapy from "../images/thrive-therapy.png";
import hallGreats from "../images/hall-greats.png";
import pokedex from "../images/pokedex-testing.png";
import "./index.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h2>Selected Projects</h2>
      <div className="projects">
        <div className="projects-one">
          <h3>The 2 Senses</h3>
          <img
            src={colorBlindness}
            alt="Homepage of Color Blindness Website, The 2 Senses. With Goal and Testing Idea paragraphs explaining our process."
            width="500px"
            className="projects-img"
          />
          <span>
            <b>Description: </b>
            <p>
              Website to assist in giving Color Blindness and Hearing Disability
              tests to the rural communities of India. Worked with a small group
              to create a variety of tests to assist in identifying color
              blindness and hearing disabilities within the rural areas of
              India. It is currently being used by hundreds of Non-Governmental Organizations (NGO's) volunteers,
              which include the Hope Charitable Trust.
            </p>
          </span>
          <a href="https://www.the2senses.com">Go to The 2 Senses</a>
        </div>
        <div className="projects-two">
          <h3>Thrive Pediatric Therapy</h3>
          <img
            src={thriveTherapy}
            alt="Homepage of Thrive Pediatric Therapy in Gallatin, TN."
            width="500px"
            className="projects-img"
          />
          <span>
            <b>Description: </b>
            <p>
              Home for the Occupational Therapy business, Thrive
              Pediatric Therapy located in Gallatin, Tennessee. This website showcases the
              business' values, services, and resources.
            </p>
          </span>
          <a href="http://www.thrivepediatrictherapy.org">
            Go to Thrive Pediatric Therapy
          </a>
        </div>
        <div className="projects-three">
          <h3>The Easy Allies' Hall of Greats</h3>
          <img
            src={hallGreats}
            alt="Homepage of The Easy Allies Hall of Greats Website. Five links to the About, Inductees, Nominees, Ceremonies, and Allies pages. "
            width="500px"
            className="projects-img"
          />
          <span>
            <b>Description: </b>
            <p>
              Home to the <a href="https://www.easyallies.com">Easy Allies</a> and their quarterly show, the
              Hall of Greats. A showcase and deliberation of the best video
              games that best represent the Allies themselves, but also the
              video game industry as a whole.
            </p>
          </span>
          <a href="https://www.thehallofgreats.com">Go to The Hall of Greats</a>
        </div>
        <div className="projects-four">
          <h3>Pokedex Application</h3>
          <img
            src={pokedex}
            alt="Homepage of The Pokedex Application. The first page lists out each Pokemon starting from the first, Bulbasaur."
            width="500px"
            className="projects-img"
          />
          <span>
            <b>Description: </b>
            <p>
              A visual showcase of over 1,000 Pokemon broken down by categories
              such as: what generation they came from, the various types of Pokemon, and
              singular pages giving more info into each Pokemon.
            </p>
          </span>
          <a href="https://joey-pokedex.herokuapp.com">
            Go to Pokedex
          </a>
        </div>
        {/* <div className="projects-four">
          <h3>The Fame of Honors</h3>
          <img
            src={thriveTherapy}
            alt="Homepage of The Fame of Honors"
            width="500px"
            className="projects-img"
          />
          <span>
            <b>Description: </b>
            <p>
              The Fame of Honors is a showcase of the NFL teams' greatest
              players that they honor by being inducted into their team Ring of
              Honor.
            </p>
          </span>
          <a href="http://www.thrivepediatrictherapy.org">Go to The Fame of Honors</a>
        </div>
        <div className="projects-five">
          <h3>The Fame of Honors</h3>
          <img
            src={thriveTherapy}
            alt="Homepage of The Fame of Honors"
            width="500px"
            className="projects-img"
          />
          <span>
            <b>Description: </b>
            <p>
              The Fame of Honors is a showcase of the NFL teams' greatest
              players that they honor by being inducted into their team Ring of
              Honor.
            </p>
          </span>
          <a href="http://www.thrivepediatrictherapy.org">Go to The Fame of Honors</a>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
