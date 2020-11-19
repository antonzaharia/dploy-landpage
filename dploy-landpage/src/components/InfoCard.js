import React from "react";
import { Card }from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function InfoCard({ title, info, img }) {
  return (
    <Card bg="light" style={{ width: "30%"}} className="card">
      <Card.Body>
        <Card.Img variant="top" src={img} alt={title} className="card-img"/>
        <Card.Title><h2>{title}</h2></Card.Title>
        <Card.Text>{info}</Card.Text>
        <Link to="/" className="trial-btn">Learn more <FontAwesomeIcon icon={faArrowRight} /></Link>
      </Card.Body>
    </Card>
  );
}
