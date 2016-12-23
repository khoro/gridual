import React from 'react';
import { Container, Row, Col } from 'gridual';
import range from 'lodash/range';

export default () => (
  <Container>
    <h2>Square <small>(experimental)</small></h2>
    <Row>
      <Col>
        <div className="light-pink-area has-nested">
          <Row>
            <Col md="1/6">
              <div className="pink-area with-text">
                default
              </div>
            </Col>

            {range(3).map(i => (
              <Col md="1/6" square>
                <div className="pink-area with-text" style={{ height: 'calc(100% - 20px)' }}>
                  square
                </div>
              </Col>
            ))}

            <Col md="1/3">
              <div className="pink-area with-text">
                default
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

    <pre>
      <code className="language-jsx">
      {`
<Row>
  <Col square>
    square column
  </Col>
</Row>
      `}
      </code>
    </pre>
    <br />
  </Container>
)
