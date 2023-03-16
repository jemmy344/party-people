import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const SpecialOffersCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageSrc} />
      <Card.Body>
        <Row>
          <Col xs={3}>
            <i className="fa fa-bed"></i> {props.numBeds}
          </Col>
          <Col xs={3}>
            <i className="fa fa-bath"></i> {props.numBaths}
          </Col>
          <Col xs={3}>
            <i className={props.hasToward ? "fa fa-check" : "fa fa-times"}></i>
            {props.hasToward ? "Taward" : "No Taward"}
          </Col>
          <Col xs={3}>
            <i className="fa fa-building"></i> {props.numRooms}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SpecialOffersCard;