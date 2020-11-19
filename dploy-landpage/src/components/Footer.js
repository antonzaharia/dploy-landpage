import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Container>
          <br /><br /><br /><br />
          <ListGroup className="list">
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list">
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list">
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
          </ListGroup>
          <br /><br /><br /><br />
        <div className="footer-bottom">
          <hr style={{ borderColor: "white" }} />
          <p>D-Ploy &copy; 2020</p>
        </div>
      </Container>
    </Container>
  );
}
