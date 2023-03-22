import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import { Dna } from "react-loader-spinner";
import { Col, Container, Row } from "react-bootstrap";
import { EventCard } from "../EventCard";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [eventMap, setEventMap] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getEventData = () => {
    setIsSearchLoading(true); // Set loading to true before making the API request

    const options = {
      method: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&apikey=kaC44nEKbqApNIGjNUt8hulGkGIVtoPN`,
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
        setIsSearchLoading(false); // Set loading to false after the API request completes
        setErrorMessage("");
      })
      .catch(function (error) {
        console.error(error);
        setErrorMessage(error);
        setIsSearchLoading(false); // Set loading to false if there is an error
      });
  };

  return (
    <div>
      <div className="search-container">
        <div className="card-search">
          <form>
            <div className="row">
              <div className="col-md-9 form-group">
                <label htmlFor="location">Search</label>
                <input
                  type="text"
                  id="search"
                  placeholder="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="col-md-3">
                {isSearchLoading ? (
                  <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                ) : (
                  <button
                    className="search-button"
                    type="submit"
                    onClick={getEventData}
                  >
                    Search
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          paddingTop: "40px",
          margin: "0 30px",
        }}
      >
        <SearchResult
          eventMap={eventMap}
          artistName={search}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default Search;

const SearchResult = ({ eventMap, artistName, errorMessage }) => {
  return (
    <>
      {/* display either no events found or the event cards */}
      {errorMessage !== "" ? (
        <h2>No events found</h2>
      ) : (
        <Container className="d-flex justify-content-center">
          <Row xs={1} md={2} lg={4} xl={4} className="g-4">
            {[...eventMap.values()].map((event) => (
              <Col key={event.id}>
                <EventCard event={event} artistName={artistName} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};
