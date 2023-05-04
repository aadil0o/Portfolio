import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aadil Haidar Ali </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am a pursuing B. Tech Computer Science and Engineering Specialization in Cyber Security and Digital Forensics in VIT Bhopal
            <br />
            <br />
            Apart from Hunting, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The struggles of the journey will be worth the destination, The river flows through mountains until it reaches the ocean!"{" "}
          </p>
          <footer className="blockquote-footer">Aadil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
