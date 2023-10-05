import React from "react";
import { Container, Row} from "react-bootstrap";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>Biography of the Author</h2>
            <p style={{ textAlign: "justify" }}>
            My country of birth is Pakistan and I worked there as a journalist for a wire service
             - <a href="https://www.app.com.pk" target="_blank" style={{ textDecoration: "underline", color: "inherit" }}
             >Associated Press of Pakistan (APP)</a>. 
             I arrived in Sydney in late 2000 with my family. After working casual jobs for seven years I 
             found a permanent employment with NSW Police Force and is still working with them. 
             I have post graduate degrees in International Studies from the <a href = "https://www.sydney.edu.au/" target = "_blank" style={{ textDecoration: "underline", color: "inherit" }}
             >University of Sydney</a> and English Literature and Mass Communication from Pakistan. 
          </p>
          {/* temp buffer added */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Row>
    </Container>
    </Container>
  );
}

export default About;
