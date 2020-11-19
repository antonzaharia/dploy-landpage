import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Container>
          <br /><br /><br /><br />
          <ListGroup className="list">
            <ListGroup.Item><Link className="footer-link" to="/">Marketplace</Link></ListGroup.Item>
            <ListGroup.Item><Link className="footer-link" to="/">Pricing</Link></ListGroup.Item>
            <ListGroup.Item><Link className="footer-link" to="/">How it Works</Link></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list">
            <ListGroup.Item><Link className="footer-link" to="/">Terms of Service</Link></ListGroup.Item>
            <ListGroup.Item><Link className="footer-link" to="/">Privacy</Link></ListGroup.Item>
            <ListGroup.Item><Link className="footer-link" to="/">Contact us</Link></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list">
            <ListGroup.Item><Link className="footer-link" to="/">Create Account</Link></ListGroup.Item>
            <ListGroup.Item><Link className="footer-link" to="/">Login</Link></ListGroup.Item>
            <ListGroup.Item><Link className="footer-link" to="/">For Developers</Link></ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-icons">
              <ListGroup.Item>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              </ListGroup.Item>
          </ListGroup>
          <br /><br /><br /><br />
        <div className="footer-bottom">
          <hr style={{ borderColor: "#484848" }} />
          <p>D-Ploy &copy; 2020</p>
        </div>
      </Container>
    </Container>
  );
}
