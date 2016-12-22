import React, { Component } from 'react';
import { Container, Row, Col } from 'gridual';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>gridual</h1>
          <p>Flexible Grid System for React Apps</p>
        </div>

        <Container>
          <h2>Responsive</h2>
          <Row>
            <Col xs="1" sm="1/3" md="1/5" lg="1/10">
              <div className="red-area" />
            </Col>
            <Col xs="1" sm="1/3" md="3/5" lg="8/10">
              <div className="red-area" />
            </Col>
            <Col xs="1" sm="1/3" md="1/5" lg="1/10">
              <div className="red-area" />
            </Col>
          </Row>
          <Row>
            <Col sm="1" md="1/2">
              <div className="red-area" />
            </Col>
            <Col sm="1" md="1/2">
              <div className="red-area" />
            </Col>
          </Row>
          <Row>
            <Col md="500px">
              <div className="red-area" />
            </Col>
            <Col fill>
              <div className="red-area" />
            </Col>
          </Row>

          <h4>Code</h4>
          <pre>
            {`
import { Container, Row, Col } from 'gridual';

<Container>
  <Row>
    <Col xs="1" sm="1/3" md="1/5" lg="1/10">
    </Col>
    <Col fill>
    </Col>
  </Row>
</Container>
            `}
          </pre>
          <br />
        </Container>

        <Container>
          <h4>Help</h4>
          <a className="github-button" href="https://github.com/Buildize/gridual"
            data-icon="octicon-star" data-style="mega"
            data-count-href="/Buildize/gridual/stargazers"
            data-count-api="/repos/Buildize/gridual#stargazers_count"
            data-count-aria-label="# stars on GitHub"
            aria-label="Star Buildize/gridual on GitHub">
            Star
          </a>
          &nbsp;&nbsp;
          <a className="github-button" href="https://github.com/Buildize/gridual"
            data-icon="octicon-repo-forked" data-style="mega"
            data-count-href="/Buildize/gridual/network"
            data-count-api="/repos/Buildize/gridual#forks_count"
            data-count-aria-label="# forks on GitHub"
            aria-label="Fork Buildize/gridual on GitHub">
            Fork
          </a>
        </Container>
      </div>
    );
  }
}

export default App;
