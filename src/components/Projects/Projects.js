import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VMAIL from "../../Assets/VMAIL.jpg";
import audioToSignLanguage from "../../Assets/audio_to_sign.jpg";
import disney from "../../Assets/disney.jpg";
import BookMania from "../../Assets/BookMania.jpg";

function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disney}
              isBlog={false}
              title="MovieTime"
              description="Developed an online movie and TV show website, utilizing Reactjs, React Bootstrap, firebase and Redux for an better user experience.
Implemented features such as browsing and streaming movie trailer and TV shows, user authentication and state management using redux, while leveraging Firebase for backend services
"
              ghLink="https://github.com/sanjay2024/Movie-Time"
              demoLink="https://movie-time-new.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookMania}
              isBlog={false}
              title="BookMania"
              description="Developed a full-stack web application using Node.js/Express, React/Redux, and MongoDB/Mongoose for user management and authentication, including registration, login/logout, profile viewing, and updating
Implemented secure authentication using JSON Web Tokens (JWT) and bcrypt for password hashing, while ensuring efficient database modeling and association for optimal data storage and retrieval.
"
              ghLink="https://github.com/sanjay2024/book-mania"
              demoLink="https://bookmania12.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioToSignLanguage}
              isBlog={false}
              title="audioToSignLanguage"
              description="A web application which takes in live audio speech recording as input, converts it into text and displays the relevant Indian Sign Language animations."
              ghLink="https://github.com/sanjay2024/Audio_To_SignLanguage_converter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VMAIL}
              isBlog={false}
              title="VMAIL"
              description="voice based email sender for blind persons
              The project is a Python-based programme that uses speech to text voice 
	 response for visually challenged people, allowing everyone to manage 	 their mail accounts using only their voice.  read, send, and complete 
	 any other necessary chores.
"
              ghLink="https://github.com/sanjay2024/MiniProject-Voice--Based-Email-Sender"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
