import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import { Links } from "../Links";
import "./styles.css";

function Footer() {
  const socialLinks = [
    { href: "https://en-gb.facebook.com/", text: <Facebook /> },
    { href: "https://twitter.com/?lang=en", text: <Twitter /> },
    { href: "https://www.instagram.com/", text: <Instagram /> },
  ];

  const helpfulLinks = [
    { href: "https://github.com/jemmy344", text: "Jemimah Jacobs" },
    { href: "https://github.com/Kohl1998", text: "Kohl Vernon" },
    { href: "https://github.com/Kohl1998", text: "Jonatan Kwiatkowski" },
    { href: "https://github.com/Kohl1998", text: "Liam Watson" },
  ];

  return (
    <Container fluid className="bg-light">
      <Col>
        <Row>
          <img src={"logo"} alt="Logo" height="50" />
          <h4 className="footer-title">Plan Your Trip</h4>
        </Row>
        <Row>
          <Col
            md={9}
            className="d-flex justify-content-start align-items-space-between"
          >
            <Links links={socialLinks}></Links>
          </Col>
        </Row>
      </Col>
      <Col md={9} className="d-flex justify-content-end">
        <Card className="mx-2">
          <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
              <ul>
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-2">
          <Card.Body>
            <Card.Title>Contact us</Card.Title>
            <Card.Text>
              <ul>
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
                <li>Bullet point 3</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-2">
          <Card.Body>
            <Card.Title>Helpful links</Card.Title>
            <Card.Text>
              <Links links={helpfulLinks}></Links>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export default Footer;
