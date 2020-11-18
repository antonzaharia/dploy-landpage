import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Trial from '../components/Trial'
import Head from '../components/Head'
import Deploy from '../components/Deploy'
import Whyus from '../components/Whyus'
import Connect from '../components/Connect'

export default class Home extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Row>
                  <Header class="header"/>
                </Row>
                <Head />
                <Trial /><hr/>
                <Deploy />
                <Whyus />
                <hr />
                <Connect />
            </Container>
        )
    }
}
