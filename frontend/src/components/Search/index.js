import React, { useState } from "react";
import axios from "axios";

export const Search = () => {
  const [input, setInput] = useState("");

  // const APIKEY = kaC44nEKbqApNIGjNUt8hulGkGIVtoPN

  const getPropertyData = () => {
    const options = {
      method: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${input}}&apikey=kaC44nEKbqApNIGjNUt8hulGkGIVtoPN`,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(e);
    setInput(value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={getPropertyData}>search</button>
    </div>
  );
};
