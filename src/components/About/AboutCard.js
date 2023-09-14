import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjay V </span>
            from <span className="purple"> Karur, India.</span>
            <br /> <br />I am a final year student pursuing an Btech Information
            Technology in Sri Krishna College Of Engineering And Technology
            <br />
            <br />
            I am a highly adaptable software developer known for my proficiency
            in programming languages such as Java. My passion for
            problem-solving and data structures and algorithms has driven me to
            successfully tackle over 400 challenges on platforms like LeetCode,
            GeeksforGeeks, and Coding Ninjas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloning Websites
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success Or Failure Consistency Matters!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
