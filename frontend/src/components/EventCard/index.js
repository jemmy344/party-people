import React from "react";
import { Card } from "react-bootstrap";

// Event from ticketmaster response
export const EventCard = ({ event }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img src={event.image} />
    <Card.Body>
      <Card.Title>{event.eventName}</Card.Title>
      <Card.Text>
        <ul>
          <li>Date:{event.date}</li>
          <li>Time: {event.time}</li>
          <li>Venue: {event.venue}</li>
          <a href={event.venueInfo} target="_blank">
            Venue Info
          </a>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
);


