import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import axios from "axios";

// Event from ticketmaster response
export const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);
  const [mostPopularClip, setMostPopularClip] = useState(null);

  const YOUTUBE_API_KEY = 'AIzaSyC3tagQHOY5eEdQBJEIV5sU22tJ4WhB0MA';

  const handleCardClick = () => {
    setShowModal(true);
    const artistName = event.eventName.split(":")[0].trim();
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q=${artistName}&type=video&key=${YOUTUBE_API_KEY}`)
      .then(response => {
        const videoId = response.data.items[0].id.videoId;
        console.log(response.data.items[0].id.videoId)
        setMostPopularClip(`https://www.youtube.com/watch?v=${videoId}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card style={{ width: "18rem" }} onClick={handleCardClick}>
        <div style={{ position: 'relative' }}>
          <Card.Img src={event.image} alt={event.eventName}  style={{ height: "200px", width: "100%" }}/>
          <span style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '5px',
            position: 'absolute',
            top: '0',
            left: '0'
          }}>{event.date} | {event.time}</span>
        </div>
        <Card.Body>
          <Card.Title>{event.eventName}</Card.Title>
          <Card.Text>
            <p><strong>Venue: </strong>{event.venue}</p>
            <a href={event.venueInfo} target="_blank" rel="noreferrer">
              Venue Info
            </a>
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
              src={`https://www.youtube.com/embed/${mostPopularClip.split("watch?v=")[1]}`}
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