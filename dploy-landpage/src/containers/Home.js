import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Head from './Head'

export default class Home extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Row>
                  <Header class="header"/>
                </Row>
                <Head />
            </Container>
        )
    }
}
