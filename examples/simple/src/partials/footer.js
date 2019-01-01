import React from 'react';
import { Container } from 'gridual';

export default () => (
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
)
