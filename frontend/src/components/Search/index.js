import React, { useState } from "react";
import axios from "axios";

export const Search = () => {
  const [input, setInput] = useState("");

  const getEventData = () => {
    const options = {
      method: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${input}&apikey=kaC44nEKbqApNIGjNUt8hulGkGIVtoPN`,
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data._embedded.events);
        // console.log(response.data._embedded.events[0].id);

        const eventMap = new Map();
        response.data._embedded.events.forEach((event) => {
          const id = event.id;
          const eventName = event.name;
          const image = event.images.length > 0 ? event.images[0].url : null;
          const date = event.dates.start.localDate;
          const time = event.dates.start.localTime;
          const venue = event._embedded.venues[0].name;
          const venueInfo = event._embedded.venues[0].url;

          eventMap.set(id, { eventName, image, date, time, venue, venueInfo });
        });
        console.log(eventMap);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(e)
    setInput(value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={getEventData}>search</button>
    </div>
  );
};
