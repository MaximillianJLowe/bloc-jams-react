import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, } from 'react-bootstrap';
import './Landing.css';

 class Landing extends Component {
  render() {
    return (
      <Grid>
        <h1>Bloc Jams</h1>
            <Jumbotron>
                  <h1 className="hero-title">Turn the music up!</h1>
            </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="selling-point1">
              <h3 className="point-title">Choose your music</h3>
                <p className="point-description1">The world is full of music; why should you have to listen to music that someone else chose?</p>
            </Col>
            <Col xs={12} sm={6} className="selling-point2">
              <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                <p className="point-description2">No arbitrary limits. No distractions.</p>
            </Col>
            < Col xs={12} sm={3} className="selling-point3">
              <h3 className="point-title">Mobile enabled</h3>
                <p className="point-description1">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </Col>
          </Row>
      </Grid>
    );
  }
}


export default Landing;
