Gridual
=======

gridual is a flexible grid system for react apps.
(still in development, help us ✌)

[Example Website](http://gridual.open.khoro.io)

### Installation

```
npm install gridual --save
```

### Usage

```javascript
import { Container, Row, Col } from 'gridual';

<Container>
  <Row>
    <Col xs="1" sm="1/2" md="1/3" lg="1/4">
      A content
    </Col>
    <Col xs="1" sm="1/2" md="2/3" lg="3/4">
      A content
    </Col>
  </Row>

  <Row>
    <Col md="200px">
      Fixed left
    </Col>
    <Col fill>
      The rest
    </Col>
    <Col md="200px">
      Fixed right
    </Col>
  </Row>
</Container>
```
