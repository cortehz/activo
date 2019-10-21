import React, { Component } from "react";

import { connect } from "react-redux";

class Activity extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.activity.title}</h2>
        <p>{this.props.activity.description}</p>
        <p>{this.props.activity.duration}</p>
        <p>{this.props.activity.id.toLocaleString()}</p>
        <button
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_ACTIVITY",
              id: this.props.activity.id
            })
          }
        >
          Edit
        </button>
        <button
          onClick={() =>
            this.props.dispatch({
              type: "DELETE_ACTIVITY",
              id: this.props.activity.id
            })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(Activity);
