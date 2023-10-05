import React from "react";
import { Container, Row } from "react-bootstrap";
import PhotoAlbum from "react-photo-album";
import img1 from "../../Assets/police-gallery/img1.jpg"

const photos = [
  { src: require("../../Assets/police-gallery/img2.jpg"), width: 1000, height: 1000 },
  { src: require("../../Assets/police-gallery/img4.jpg"), width: 1000, height: 1000 },
  { src: require("../../Assets/police-gallery/img5.jpg"), width: 1000, height: 1000 },
  { src: require("../../Assets/police-gallery/img3.jpg"), width: 1000, height: 1000 },
];

export default function Other() {
  return (
  <Container fluid className="about-section">
         <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
          Police Officer: A Journey of Service and Achievement</h1>
        </Row>
          <img src={img1} width="400" height="500"/>
          <br></br>
          <br></br>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div
            style={{
              backgroundColor: "rgba(100, 58, 148, 0.582)",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "200px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Coming Soon
          </div>
        </Row>

        <br></br>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <PhotoAlbum layout="rows" photos={photos} />
        </Row>
  </Container>
  </Container> );
}
