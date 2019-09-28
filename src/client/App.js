import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


export default class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href='/'>Landing</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container id="app-container">
          <Row>
            <h1>Forage</h1>
          </Row>
          <main>
            <Landing/>
          </main>
        </Container>
      </div>
    );
  }
}
