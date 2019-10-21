import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newDescription = this.getDescription.value;
    const newDuration = this.getDuration.value;
    const newDurationTwo = this.getDurationTwo.value;
    const data = {
      newTitle,
      newDescription,
      newDuration,
      newDurationTwo
    };
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.activity.id,
      data: data
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.activity.title}
            placeholder="Enter Activity Title"
          />
          <br />
          <br />
          <input
            required
            rows="5"
            ref={input => (this.getDescription = input)}
            defaultValue={this.props.activity.description}
            cols="28"
            placeholder="Enter Activity"
          />
          <br />
          <br />
          <input
            required
            rows="5"
            ref={input => (this.getDuration = input)}
            defaultValue={this.props.activity.duration}
            cols="28"
            type="time"
            id="appt"
            name="appt"
            min="00:00"
            placeholder="Start of Activity"
            max="23:59"
          />{" "}
          <br />
          <br />
          <input
            required
            rows="5"
            ref={input => (this.getDurationTwo = input)}
            defaultValue={this.props.activity.durationTwo}
            cols="28"
            type="time"
            id="appt"
            name="appt"
            min="00:00"
            placeholder="End of Activity"
            max="23:59"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
