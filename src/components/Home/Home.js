import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import me from "../../Assets/mypicture.jpg";
import Type from "./Type";
import { RxOpenInNewWindow } from "react-icons/rx"; // Import the arrow icon from react-icons

function Home() {
  return (
    <div fluid className="home-section" id="home" style={{ zIndex: '100' }}>
      <div className="home-content">
        <div className="row">
          <div className="col-lg-6">
            <Col md={12} className="home-header">
              <div className="content-container">
                <h1 className="heading">
                 <strong className="main-name">Iftikhar Ahmed Qureshi</strong> (Jaazib).
                </h1>
                <div className="type-container">
                  <Type />
                  <br/>
                </div>
                <div className="paragraph-container">
                  <p>
                    <span className="teal"><h3>Announcement: </h3></span>
                    <strong>Book Launch:</strong> Urdu Poetry <strong className="teal">ASHK DO CHAAR</strong>
                    <br></br>
                    <strong>Date and Time:</strong> <em>Friday: October 6th, 2023</em> at <em>5:30 pm to 7:30 pm</em>
                    <br></br>
                    <strong>Location:</strong> Community Room, Max Webber Library, Blacktown Corner Flushcombe Road & Alpha Street
                    <br></br>
                    <strong>RSVP:</strong> 30th September, 0431 432 679
                  </p>
                </div>
              <Col md={12}>
                <div className="urdu-container">
                  <h3 className="teal">:لاش کا نرھوں</h3>
                  <p
                  >وفا جو تم سے نبھائی ہوتی
                  <br/>
                  عمرنہ منت میں سڑکوں پہ گنوائی ہوتی
                  <br/>
                  <br/>
                  سانپ یادوں کے ہیں ڈستے مجھے ہر شام و سحر
                  <br/>
                  یہ جو سوتے تو مجھے نیند بھی آئی ہوتی
                  <br/>
                  <br/>
                  تیری چوکھت سے جو اس روز نہ آئا ہوتا
                  <br/>
                  میں خدا ہوتا دنیا پر خدائی ہوتی
                  <br/>
                  <br/>
                  ہوتی گیرت تو تیرے ساتھ ہی مرجاتے سجن
                  <br/>
                  لاش کا نرھوں پہ یوں اپنی نہ اٹھائی ہوتی
                  <br/>
                  <br/>
                  ہاتھ کچھ نہ آیا کہ میرے ایک سیاہی کے سوا
                  <br/>
                  دیکھنے حال میرا تو بھی تو آئی ہوتی
                  </p>
                </div>
              </Col>
              <br />
              <div >
                <Link to="/about" className="read-more">
                  Read More <RxOpenInNewWindow className="icon" />
                </Link>
              </div>
              </div>
              <div>
                <div style={{ width: "10px", height: "132px" }}></div>
                <div style={{ width: "50px", height: "132px" }}></div>
              </div>
            </Col>
          </div>
          <div className="col-lg-6" style={{ paddingLeft: 130,  position:  "relative" }}>
              <img
                className="myimage"
                src={me}
                alt="home pic"
                style={{ width: "70%", height: "auto", border: "2px solid #000", borderRadius: "10px"}}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
