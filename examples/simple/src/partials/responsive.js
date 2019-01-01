import React from 'react';
import { Container, Row, Col } from 'gridual';

export default () => (
  <Container>
    <h2>Responsive</h2>
    <Row>
      <Col xs="1" sm="1/3" md="1/5" lg="1/10">
        <div className="pink-area" />
      </Col>
      <Col xs="1" sm="1/3" md="3/5" lg="8/10">
        <div className="pink-area" />
      </Col>
      <Col xs="1" sm="1/3" md="1/5" lg="1/10">
        <div className="pink-area" />
      </Col>
    </Row>
    <Row>
      <Col sm="1" md="1/2">
        <div className="pink-area" />
      </Col>
      <Col sm="1" md="1/2">
        <div className="pink-area" />
      </Col>
    </Row>
    <Row>
      <Col md="500px">
        <div className="pink-area" />
      </Col>
      <Col fill>
        <div className="pink-area" />
      </Col>
    </Row>

    <pre>
      <code className="language-jsx">
      {`
import { Container, Row, Col } from 'gridual';

<Container maxWidth={optional}>
  <Row>
    <Col xs="1" sm="1/3" md="1/5" lg="1/10">
    </Col>
    <Col fill>
    </Col>
  </Row>
</Container>
      `}
      </code>
    </pre>
    <br />
  </Container>
)
