import React from 'react';
import { Container, Row, Col } from 'gridual';
import range from 'lodash/range';

export default () => (
  <Container>
    <h2>Nested</h2>
    <Row>
      <Col md="1/2">
        <div className="light-pink-area has-nested">
          <Row>
            <Col md="1/2">
              <div className="pink-area with-text">
                inner grid column
              </div>
            </Col>
            <Col md="1/2">
              <div className="pink-area with-text">
                inner grid column
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md="1/4">
        <div className="light-pink-area" />
      </Col>
      <Col md="1/4">
        <div className="light-pink-area" />
      </Col>
    </Row>
    <Row>
      <Col sm="1" md="1/5">
        <div className="light-pink-area" />
      </Col>
      <Col sm="1" md="4/5">
        <div className="light-pink-area has-nested">
          <Row>
            {range(10).map(() => (
              <Col md="1/4">
                <div className="pink-area" />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>

    <pre>
      <code className="language-jsx">
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
      `}
      </code>
    </pre>
    <br />
  </Container>
)
