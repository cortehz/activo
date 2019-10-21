import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "./activo.png";

class ActivityForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const description = this.getDescription.value;
    const duration = this.getDuration.value;
    const durationTwo = this.getDurationTwo.value;
    const data = {
      id: new Date(),
      title,
      description,
      duration,
      durationTwo,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_ACTIVITY",
      data
    });
    this.getTitle.value = "";
    this.getDescription.value = "";
    this.getDuration.value = "";
    this.getDurationTwo.value = "";
  };
  render() {
    return (
      <div className="create-activity">
        <img src={logo} alt="activo logo" height="100" width="150"></img>
        <h1>Welcome to Activo</h1>
        <p>
          Create and manage your daily activities in one place. All for free .
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            cols="28"
            ref={input => (this.getTitle = input)}
            placeholder="Activity Title"
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "-5px"
            }}
          >
            <label style={{ fontSize: "9px", textAlign: "left" }}>
              What time do you want to start this activity:
            </label>
            <input
              type="time"
              id="appt"
              name="appt"
              min="00:00"
              placeholder="Time to start activity"
              cols="28"
              ref={input => (this.getDuration = input)}
              max="23:59"
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              style={{ fontSize: "9px", textAlign: "left", marginTop: "5px" }}
            >
              Activity End:
            </label>
            <input
              type="time"
              id="appt"
              name="appt"
              min="00:00"
              placeholder="End of Activity"
              cols="28"
              ref={input => (this.getDurationTwo = input)}
              max="23:59"
              required
            />
          </div>
          <br />
          <br />
          <textarea
            required
            rows="10"
            ref={input => (this.getDescription = input)}
            cols="18"
            placeholder="Activity Description"
          />{" "}
          <br />
          <br />
          <button style={{ fontSize: 15, float: "left", width: "100px" }}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(ActivityForm);
