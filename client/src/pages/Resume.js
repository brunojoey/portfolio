import React from "react";
import './style.css'

function Resume() {
  return (
    <div>
      <h1>Joseph Bruno</h1>
      <span>
        {" "}
        <h4>Nashville, TN</h4> | <h4>Phone</h4>: 615-336-3634 | <h4>Email</h4>:
        brunojoey12@gmail.com
        <a href="https://www.linkedin.com/in/brunojoey">LinkedIn</a> |{" "}
        <a href="https://www.github.com/brunojoey">Github</a>
        <a href="https://brunojoey.github.io/react-portfolio/">
          Portfolio
        </a>{" "}
      </span>
      <h3>Summary</h3>
      <p>
        Full Stack Web Developer with a background in social media providing
        monumental and strong problem-solving skills with a keen eye for
        aesthetics and presentation. An excellent communicator and collaborator
        that works well on team-based projects as well as independently.
      </p>
      <h3>Technical Skills</h3>
      <p>
        Node.Js, Express, JavaScript, jQuery, React.js, Git, Github, Axios,
        MongoDB, MySQL, HTML, CSS, Bootstrap, Skeleton CSS, Media Queries,
        API’s, Heroku, Adobe Creative Cloud
      </p>
      <h3>Experience</h3>
      <h4>
        Rizzy Home: Calhoun, GA | Social Media Manager & Graphic Designer
        09/2018 – 05/2019
      </h4>
      <p>
        Created a monthly and yearly sheet to plan out various social media
        posts throughout different mediums to achieve an efficient social media
        schedule. Consolidated over a hundred different inventory folders to
        delete unnecessary photos. Created photos and designs to post through
        Adobe Creative Cloud. Co-designed and wireframed Rizzy Home’s 2019
        Catalog while achieving a high satisfaction from my manager.
      </p>
      <h3>Education</h3>
      <h4>
        Vanderbilt University: Nashville, TN Full Stack Web Development
        Certificate | 2020
      </h4>
      <p>
        Gained technical programming skills: HTML, CSS, JavaScript, Express.js,
        React.js, Node.js, and MySQL.{" "}
      </p>
      <h4>
        The University of Tennessee at Chattanooga: Chattanooga, TN Bachelors of
        Arts in Communications & Spanish
      </h4>
    </div>
  );
}

export default Resume;
