import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import LandingImage from './landing_hero.png';


const Landing = () => (
  <div>
    <Row>
    <Image
      src={LandingImage}
      alt="Forage"
      fluid
    />
    </Row>
    <Row>
      <Col>
        <h3>Create or Import Recipes!</h3>
      </Col>
      <Col>
      <h3>Plan customized meals for the week!</h3>
      </Col>
      <Col>
      <h3>Automatically get a shopping list. </h3>
      </Col>
    </Row>
  </div>
    
);

export default Landing;
