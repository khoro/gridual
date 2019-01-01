import React, { Component } from 'react';
import Partials from './partials';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>gridual</h1>
          <p>Flexible Grid System for React Apps</p>
        </div>

        <Partials.Responsive />
        <Partials.Alignments />
        <Partials.Nested />
        <Partials.Reverse />
        <Partials.Footer />
      </div>
    );
  }
}

export default App;
