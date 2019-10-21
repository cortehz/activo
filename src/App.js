import React, { Component } from "react";
import ActivityForm from "./ActivityForm";
import AllActivity from "./AllActivities";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActivityForm />
        <AllActivity />
      </div>
    );
  }
}
export default App;
