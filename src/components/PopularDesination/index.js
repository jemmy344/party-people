import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"

function Populardestinations() {
    return (
        <div className="rentals-container">
            <h2>Popular rentals</h2>
            <p>From historical cities to natural attractions, stay in the best of the best!</p>
            <Row xs={1} md={2} lg={4} xl={4} className="g-4">
                {/* to show 4 cards */}
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="http://via.placeholder.com/640x360" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Populardestinations