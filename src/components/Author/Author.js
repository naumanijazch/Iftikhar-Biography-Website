import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Other() {
  return (
  <Container fluid className="about-section">
         <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
          Behind the Words: The Life of an Author
          </h1>
          <p>
            <strong>Book Launch:</strong> Urdu Poetry <strong className="teal">ASHK DO CHAAR</strong>
            <br></br>
            <strong>Date and Time:</strong> <em>Friday: October 6th, 2023</em> at <em>5:30 pm to 7:30 pm</em>
            <br></br>
            <strong>Location:</strong> Community Room, Max Webber Library, Blacktown Corner Flushcombe Road & Alpha Street
            <br></br>
            <strong>RSVP:</strong> 30th September, 0431 432 679
          </p>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
  <div
    style={{
      backgroundColor: "rgba(100, 58, 148, 1)",  
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "100%",
      color: "white",
      fontWeight: "bold",
      maxWidth: "600px"
    }}
  >
    Coming Soon
    <div style= {{
      backgroundColor: "rgba(100, 58, 148, 0.3)",  
      marginTop: "10px",
      padding: "10px",
      borderRadius: "10px"
    }}>
      <p>
        I have written a novel titled "The Victim of Free Will". The novel revolves around a young family who 
        immigrates to Australia. It captures the emotional upheavals which a young couple faces while adjusting 
        in a new country with different religious and cultural values.
      </p>
      <p>
        Through its characters, the novel raises questions about love, marriage, religion, individual freedom, 
        family, friends, and society, and the difficulties in assimilation into a foreign country.
      </p>
      <p>
        This novel is written in English.
      </p>
    </div>
  </div>
</Row>


  </Container>
  </Container> );
}
