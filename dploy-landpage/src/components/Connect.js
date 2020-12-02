import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function Connect() {
  return (
    <div className="ready-div">
      <div className="square-ready"></div>
    <Container>  
      <Card className="text-center get-started-card">
        <Card.Title className="get-started-text">
          Ready for integration?
        </Card.Title>
        <Button className="get-started-btn">Get Started</Button>
      </Card>
    </Container>
    </div>
  );
}
