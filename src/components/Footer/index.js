import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <Row className="row">
            <Col className="footer-col sm-4">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </Col>
            <Col className="footer-col sm-4">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </Col>
            <Col className="footer-col sm-4">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">Merchandise</a>
                </li>
                <li>
                  <a href="#">Collabrations</a>
                </li>
                <li>
                  <a href="#">Future Pop-ups</a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </Col>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://en-gb.facebook.com/" target="_blank"  rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/" target="_blank"  rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank"  rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
                  target="_blank"  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Row>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
