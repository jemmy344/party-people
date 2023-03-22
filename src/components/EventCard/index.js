import React, { useState } from "react";
import { Badge, Card, Modal } from "react-bootstrap";
import axios from "axios";

// Event from ticketmaster response
export const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);
  const [mostPopularClip, setMostPopularClip] = useState(null);

  const YOUTUBE_API_KEY = 'AIzaSyCimDvKO4CDYu2F28AU_beZBZyFSrZKJR8';

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
      <Card style={{ width: "100%", height: '100%' }} onClick={handleCardClick}>
        <div style={{ position: 'relative' }}>
          <Card.Img src={event.image} alt={event.eventName} style={{ height: "200px", width: "100%" }} />
          <div
            style={{
              padding: '6px 12px',
              borderBottomRightRadius: '10px',
              position: 'absolute',
              top: '0',
              left: '0',
              opacity: '0.7',
              transition: 'opacity 0.2s ease-in-out',
              backgroundColor: 'orange',
              color: 'white'
            }}
          >
            {event.date} | {event.time}
          </div>
        </div>

        <Card.Body>
          <Card.Title>{event.eventName}</Card.Title>
          <Card.Text>
            <p><strong>Venue: </strong>{event.venue}</p>
            <a href={event.venueInfo} style={{ backgroundColor: '#f57009', color: 'white' }} target="_blank" rel="noreferrer"
              className="btn rounded-pill"
            >
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