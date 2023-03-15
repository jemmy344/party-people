import React, { useState } from "react";
import axios from "axios";

export const Search = () => {
  const [input, setInput] = useState("")



  const getPropertyData = () => {
    const options = {
      method: 'GET',
      url: 'https://zoopla.p.rapidapi.com/auto-complete',
      params: { search_term: input, search_type: 'listings' },
      headers: {
        'X-RapidAPI-Key': '32165086ecmshd3c88bb70eb641ep123dbbjsn5a6cf8acbf25',
        'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
      }
    }
    axios.request(options).then(function (response) {

      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    })
  }


  const handleChange = (e) => {
    const { value } = e.target;
    console.log(e);
    setInput(value);
   
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={getPropertyData}>search</button>
    </div>
  );
};





















