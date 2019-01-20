import React from 'react';
import { Container, Row, Col } from '../../lib';
import { Box } from '../helpers';
import range from 'lodash/range';

export default () => (
  <Container>
    <h2>Nested</h2>
    <Row>
      <Col md="1/2">
        <Box background="#9C98F4" hasNested>
          <Row>
            <Col md="1/2">
              <Box withText>
                inner grid column
              </Box>
            </Col>
            <Col md="1/2">
              <Box withText>
                inner grid column
              </Box>
            </Col>
          </Row>
        </Box>
      </Col>
      <Col md="1/4">
        <Box />
      </Col>
      <Col md="1/4">
        <Box />
      </Col>
    </Row>
    <Row>
      <Col sm="1" md="1/5">
        <Box />
      </Col>
      <Col sm="1" md="4/5">
        <Box background="#9C98F4" hasNested>
          <Row>
            {range(10).map(() => (
              <Col md="1/4">
                <Box />
              </Col>
            ))}
          </Row>
        </Box>
      </Col>
    </Row>

    <pre>
      <code>
      {`
<Row>
  <Col md="1/2">
    <Row>
      <Col md="1/2">
        inner grid column
      </Col>
      <Col md="1/2">
        inner grid column
      </Col>
    </Row>
  </Col>
  <Col md="1/2">
  </Col>
</Row>
      `.trim()}
      </code>
    </pre>
    <br />
  </Container>
)
