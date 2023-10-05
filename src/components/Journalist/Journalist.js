import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import Button from "react-bootstrap/Button";
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function JournalistNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="journalist-section">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
              <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>A Glimpse into my Life as a Journalist</h2>
        </Row>
          
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


        {/* comming soon section below */}
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="journalist">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
      </Row> */}
      </Container>
    </div>
  );
}

export default JournalistNew;
