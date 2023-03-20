import React, { useState } from "react";
import axios from "axios";
import { EventCard } from "../EventCard";
import { Container, Col, Row } from "react-bootstrap";

export const Search = () => {
  const [input, setInput] = useState("");
  const [eventMap, setEventMap] = useState(new Map());

  const getEventData = () => {
    const options = {
      method: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${input}&apikey=kaC44nEKbqApNIGjNUt8hulGkGIVtoPN`,
    };
    axios
      .request(options)
      .then(function (response) {
        const newEventMap = new Map();
        response.data._embedded.events.forEach((event) => {
          const id = event.id;
          const eventName = event.name;
          const image = event.images.length > 0 ? event.images[0].url : null;
          const date = event.dates.start.localDate;
          const time = event.dates.start.localTime;
          const venue = event._embedded.venues[0].name;
          const venueInfo = event._embedded.venues[0].url;

          newEventMap.set(id, {
            eventName,
            image,
            date,
            time,
            venue,
            venueInfo,
          });
        });
        setEventMap(newEventMap);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={getEventData}>Search</button>
      <Container>
        <Row xs={1} md={2} lg={4} xl={4} className="g-4">
          {[...eventMap.values()].map((event) => (
            <Col>
              <EventCard event={event} artistName={input}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
