import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import InfoCard from "./InfoCard";
import secured from '../images/secured.png'
import cheap from '../images/cheap.png'
import simple from '../images/simple.png'

const cards = [
  {
    title: "Secured",
    img: secured,
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Cheap",
    img: cheap,
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Simple",
    img: simple,
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Whyus() {
  const renderCards = () => {
    return cards.map((card) => (
      <InfoCard title={card.title} info={card.info} img={card.img}/>
    ));
  };
  return (
    <Container className="card-container">
        <h2>WHY US</h2><br/><br/><br/><br/>
      <CardGroup>{renderCards()}</CardGroup>
      <br/><br/><br/><br/>
    </Container>
  );
}
