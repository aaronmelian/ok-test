import React, { Component } from "react";

import StepsContainer from "./containers/StepsContainer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-content">
          <StepsContainer />
        </main>
      </div>
    );
  }
}

export default App;
