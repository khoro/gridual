import React from 'react';
import { Container, Row, Col } from 'gridual';
import range from 'lodash/range';

export default () => (
  <Container>
    <h2>Reverse</h2>
    <Row>
      <Col>
        <div className="light-pink-area has-nested">
          <Row reverse>
            {range(10).map(i => (
              <Col md="1/10">
                <div className="pink-area with-text">
                  <b>{i + 1}</b>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>

    <pre>
      <code className="language-jsx">
      {`
<Row reverse>
  <Col md="1/3">
    1
  </Col>
  <Col md="1/3">
    2
  </Col>
  <Col md="1/3">
    3
  </Col>
</Row>
      `}
      </code>
    </pre>
    <br />
  </Container>
)
