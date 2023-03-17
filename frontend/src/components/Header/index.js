import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import backgroundImage from "../../assets/lounge.jpg";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  // function to handle modal show/hide on button click
  const handleShowModal = () => setShowModal(!showModal);

  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "50vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
            marginBottom: "2rem", // add margin bottom to div container
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "4rem",
              textAlign: "center",
            }}
          >
            Plan Your Trip With Travel House
          </h1>
          <p>The best travel your journey respectful of the environment.</p>
          <Button variant="primary" onClick={handleShowModal} style={{ marginTop: "1rem" }}>
            Learn More
          </Button>
        </div>

        <Modal show={showModal} onHide={handleShowModal}>
          <Modal.Header>
            <Modal.Title>Travel Services</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We offer a variety of travel services including flight bookings,
            hotel reservations, and tour packages. Contact us for more information.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShowModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </header>
  );
};

export default Header;
