import React from 'react';
import { Container, Row, Col } from '../../lib';
import { Box } from '../helpers';

export default () => (
  <Container>
    <h2>Responsive</h2>
    <Row>
      <Col xs="1" sm="1/3" md="1/5" lg="1/10">
        <Box />
      </Col>
      <Col xs="1" sm="1/3" md="3/5" lg="8/10">
        <Box />
      </Col>
      <Col xs="1" sm="1/3" md="1/5" lg="1/10">
        <Box />
      </Col>
    </Row>
    <Row>
      <Col sm="1" md="1/2">
        <Box />
      </Col>
      <Col sm="1" md="1/2">
        <Box />
      </Col>
    </Row>

    <pre>
      <code>
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
      `.trim()}
      </code>
    </pre>
  </Container>
)
