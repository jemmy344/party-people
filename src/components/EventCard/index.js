import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

// Event from ticketmaster response
export const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);
  const [mostPopularClip, setMostPopularClip] = useState(null);

  const YOUTUBE_API_KEY = "AIzaSyC3tagQHOY5eEdQBJEIV5sU22tJ4WhB0MA";

  const handleCardClick = () => {
    setShowModal(true);
    const artistName = event.eventName.split(":")[0].trim();
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q=${artistName}&type=video&key=${YOUTUBE_API_KEY}`
      )
      .then((response) => {
        const videoId = response.data.items[0].id.videoId;
        console.log(response.data.items[0].id.videoId);
        setMostPopularClip(`https://www.youtube.com/watch?v=${videoId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className="event-card" style={{ width: "18rem" }} onClick={handleCardClick}>
        <Card.Img className="event-card-img" src={event.image} />
        <Card.Body className="event-card-img">
          <Card.Title>{event.eventName}</Card.Title>
          <Card.Text>
            <ul>
              <li>Date:{event.date}</li>
              <li>Time: {event.time}</li>
              <li>Venue: {event.venue}</li>
              <a href={event.venueInfo} target="_blank" rel="noreferrer">
                Venue Info
              </a>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>


      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{event.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mostPopularClip && (
            <iframe
              width="100%"
              height="500px"
              maxWidth="560px"
              src={`https://www.youtube.com/embed/${
                mostPopularClip.split("watch?v=")[1]
              }`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ margin: "auto" }}
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
