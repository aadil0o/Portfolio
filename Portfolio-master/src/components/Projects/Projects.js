import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CYSEC AWA"
              description="Don't be a victim of Cyber crime - stay protected with Cyber Security Awareness! Our app provides an easy-to-use platform to help you understand the latest threats and know how to safely operate online. Take the guesswork out of staying safe with our comprehensive security quizzes, educational resources, and live chat with cyber experts. Get ahead of the curve and secure your digital life now with Cyber Security Awareness!."
              demoLink="https://cyber-awareness.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="User Based Authentication System"
              description=" An image-based authentication system is a security mechanism that uses images or
              pictures to verify the identity of a user. It works by requiring the user to provide one or more
              images that are pre-selected or taken on the spot, and then comparing them to a previously stored
              reference image."
              ghLink="https://github.com/aadil0o/user-based-authentication-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cap-Traduire 🍁"
              description="Communication is vital in today's era. Even more important is to have a healthy conversation in official spaces. We come across people hailing from various backgrounds, speaking various languages.

              CAPTRADUIRE Translates what you speak, for you to have an uninterrupted conversation.  
              It takes the input in the form of English
              
              Gives output in the desired language on a single click. This program helps communication between two parties easy.
              
              This software assists you in translating a language into four distinct languages"
              ghLink="https://github.com/JOS-RE/Cap-Traduire"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
