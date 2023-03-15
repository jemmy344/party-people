import React, { useState } from "react";
import axios from "axios";

export const Search = () => {
    const  [input, setInput ] = useState("")

// const options = {
//   method: 'GET',
//   url: 'https://zoopla.p.rapidapi.com/auto-complete',
//   params: {search_term: 'greenwich', search_type: 'listings'},
//   headers: {
//     'X-RapidAPI-Key': '32165086ecmshd3c88bb70eb641ep123dbbjsn5a6cf8acbf25',
//     'X-RapidAPI-Host': 'zoopla.p.rapidapi.com'
//   }
// }

// axios.request(options).then(function (response) {
  
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// })








  const getPropertyData = (value) =>
   
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });

  const handleChange = (value) => {
    setInput(value);
    getPropertyData(value);
  };

  return (
    <>
      <input value={input} onChange={(e) => handleChange(e.target.value)} />
    </>
  );
};





















