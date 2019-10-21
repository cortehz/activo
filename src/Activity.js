import React, { Component } from "react";

import { connect } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

class Activity extends Component {
  render() {
    return (
      <div className="activity-div">
        <div className="heading">
          <h2>{this.props.activity.title}</h2>{" "}
          <p>{`${this.props.activity.duration} - ${this.props.activity.durationTwo} Hrs`}</p>
        </div>

        <p>{this.props.activity.description}</p>
        <p style={{ color: "#666" }}>
          Created on: {this.props.activity.id.toLocaleString()}
        </p>
        <div className="activity-bottom">
          <button
            onClick={() =>
              this.props.dispatch({
                type: "EDIT_ACTIVITY",
                id: this.props.activity.id
              })
            }
          >
            <FaEdit />
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
            <FaTrashAlt /> Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Activity);
