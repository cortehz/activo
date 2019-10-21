import React, { Component } from "react";
import { connect } from "react-redux";

class ActivityForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const description = this.getDescription.value;
    const duration = this.getDuration.value;
    const data = {
      id: new Date(),
      title,
      description,
      duration,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_ACTIVITY",
      data
    });
    this.getTitle.value = "";
    this.getDescription.value = "";
    this.getDuration.value = "";
  };
  render() {
    return (
      <div className="create-activity">
        <h1>Create Activity</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getDescription = input)}
            cols="28"
            placeholder="Enter Activity Description"
          />{" "}
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getDuration = input)}
            cols="28"
            placeholder="Enter Activity Duration Eg 2am-3am"
          />
          <br />
          <br />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default connect()(ActivityForm);
