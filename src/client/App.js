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
      <Container id="app-container">
        <Nav>
            <Link to='/'>Landing</Link>
        </Nav>
        <Row>
          <h1>Forage</h1>
        </Row>
        <main>
          <Route exact path="/" component={Landing} />
        </main>
      </Container>
    );
  }
}
