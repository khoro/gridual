import React from 'react';
import { Container, Row, Col } from '../../lib';
import { Box } from '../helpers';
import range from 'lodash/range';
import capitalize from 'lodash/capitalize';

export default () => (
  <Container>
    <h2>Alignments</h2>
    {['left', 'center', 'right', 'top', 'middle', 'bottom'].map(align => (
      <div style={{ marginBottom: 60 }}>
        <Row>
          <Col>
            <Box background="#9C98F4" hasNested>
              <Row {...{[align]: true}}>
                {['top', 'middle', 'bottom'].includes(align) ? (
                  <Col md="1/2">
                    <Box style={{ height: '150px' }}>
                    </Box>
                  </Col>
                ) : null}
                <Col md="1/2">
                  <Box withText>
                    {align} alignment
                  </Box>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>

        <pre>
          <code className="language-html">
          {`
<Row ${align}>
  <Col></Col>
</Row>
          `.trim()}
          </code>
        </pre>
      </div>
    ))}
  </Container>
)
