import React from 'react';
import { Container, Row, Col } from 'gridual';
import range from 'lodash/range';
import capitalize from 'lodash/capitalize';

export default () => (
  <Container>
    <h2>Alignments</h2>
    {['left', 'center', 'right', 'top', 'middle', 'bottom'].map(align => (
      <div>
        <h4>{capitalize(align)}</h4>
        <Row>
          <Col>
            <div className="light-pink-area has-nested">
              <Row {...{[align]: true}}>
                {['top', 'middle', 'bottom'].includes(align) ? (
                  <Col md="1/2">
                    <div className="pink-area" style={{ height: '150px' }}>
                    </div>
                  </Col>
                ) : null}
                <Col md="1/2">
                  <div className="pink-area with-text">
                    {align} alignment
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <pre>
          <code className="language-jsx">
          {`
<Row ${align}>
  <Col></Col>
</Row>
          `}
          </code>
        </pre>
      </div>
    ))}

    <br />
  </Container>
)
