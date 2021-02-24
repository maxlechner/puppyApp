import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


function About() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome Page</h1>
          <p>
            Welcome to puppster app!
      </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default About;
