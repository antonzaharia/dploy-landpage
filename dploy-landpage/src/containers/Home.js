import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                  <Header class="header"/>
                </Row>
            </Container>
        )
    }
}
