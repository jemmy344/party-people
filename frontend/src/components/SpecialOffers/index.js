import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SpecialOffersCard from '../SpecialOffersCard';

const SpecialOffers = () => {
  const properties = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/300x200',
      numBeds: 2,
      numBaths: 1,
      hasTaward: true,
      numRooms: 3,
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/300x200',
      numBeds: 3,
      numBaths: 2,
      hasTaward: false,
      numRooms: 4,
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/300x200',
      numBeds: 1,
      numBaths: 1,
      hasTaward: true,
      numRooms: 2,
    },
  ];

  return (
    <Container>
      <h1>Special Offers</h1>
      <h2>Destination can describe where you are going, like a traveler whose destination is Paris, or a place that is known for a particular purpose.</h2>
      <Row>
        {properties.map(property => (
          <Col key={property.id}>
            <SpecialOffersCard {...property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SpecialOffers;