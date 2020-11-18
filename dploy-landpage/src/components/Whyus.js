import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Card from './Card'

const cards = [
    {title: "Secured", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {title: "Cheap", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {title: "Simple", info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
]

export default function Whyus() {
    const renderCards = () => {
        return cards.map(card => <Card title={card.title} info={card.info}/>)
    }
    return (
        <CardGroup>
            {renderCards()}
        </CardGroup>
    )
}
