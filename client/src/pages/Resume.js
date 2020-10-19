import React from "react";
import './style.css'

function Resume() {
  return (
    <div>
      <h1>Joseph Bruno</h1>
      <div className='resume-links-div'>
        {" "}
        <strong>Nashville, TN</strong> | <strong>Phone</strong>: 615-336-3634 | <p><strong>Email</strong>:
        brunojoey12@gmail.com</p>
        <a href="https://www.linkedin.com/in/brunojoey" className='mx-3 resume-links'>LinkedIn</a> |{" "}
        <a href="https://www.github.com/brunojoey" className='mx-3 resume-links'>Github</a> |{" "}
        <a href="https://brunojoey.github.io/react-portfolio/" className='mx-3 resume-links'>
          Portfolio
        </a>{" "}
      </div>
      <h3>Summary</h3>
      <p>
        Full Stack Web Developer with a background in social media providing
        monumental and strong problem-solving skills with a keen eye for
        aesthetics and presentation. </p> <p> An excellent communicator and collaborator
        that works well on team-based projects as well as independently.
      </p>
      <h3 style={{ marginTop: '1em'}}>Technical Skills</h3>
      <p>
        Node.Js, Express, JavaScript, jQuery, React.js, Git, Github, Axios,
        MongoDB, MySQL, HTML, CSS, Bootstrap, Skeleton CSS, Media Queries,
        API’s, Heroku, Adobe Creative Cloud
      </p>
      <h3 style={{ marginTop: '1em'}}>Experience</h3>
      <p>
        <strong style={{ textDecoration: 'underline' }}>Rizzy Home</strong>: Calhoun, GA | Social Media Manager &#38; Graphic Designer
        | 09/2018 – 05/2019
      </p>
        <p> Consolidated over a hundred different inventory folders to
        delete unnecessary photos. </p>
      <p> Created a monthly and yearly sheet to plan out various social media
        posts throughout different mediums to achieve an efficient social media
        schedule. </p> 
        <p> Created photos and designs to post through
        Adobe Creative Cloud. Co-designed and wireframed Rizzy Home’s 2019
        Catalog while achieving a high satisfaction from my manager. </p>
      <h3 style={{ marginTop: '1em'}}>Education</h3>
      <p>
        <strong style={{ textDecoration: 'underline'}}>Vanderbilt University</strong>: Nashville, TN | Full Stack Web Development
        Certificate | 2020
      </p>
      <p>
        Gained technical programming skills within HTML, CSS, JavaScript, Express.js,
        React.js, Node.js, and MySQL.{" "}
      </p>
      <p>
        <strong style={{ textDecoration: 'underline' }}>The University of Tennessee at Chattanooga</strong>: Chattanooga, TN | Bachelors of
        Arts in Communications &#38; Spanish | 2018
      </p>
    </div>
  );
}

export default Resume;
