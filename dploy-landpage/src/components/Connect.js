import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function Connect() {
  return (
    <Container>
      <Card className="text-center get-started-card">
        <Card.Title className="get-started-text">
          Ready for integration?
        </Card.Title>
        <Button className="get-started-btn">Get Started</Button>
      </Card>
    </Container>
  );
}
