import React, { Component } from "react";
import OpenbankLogo from "./assets/img/key_openbank.png";

import StepsContainer from "./containers/StepsContainer";
import Step1 from "./views/ProductInformation";
import Step2 from "./views/Form";
import Step3 from "./views/Feedback";

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
