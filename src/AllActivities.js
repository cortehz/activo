import React, { Component } from "react";

import { connect } from "react-redux";

import Activity from "./Activity";

import EditComponent from "./EditComponent";

class AllActivities extends Component {
  constructor(props) {
    super(props);
    this.toggleSortDate = this.toggleSortDate.bind(this);
    this.state = { isOldestFirst: true };
  }

  sortByDate() {
    const { activities } = this.props;
    if (this.state.isOldestFirst) {
      activities.sort((a, b) => a.id - b.id);
    } else {
      activities.sort((a, b) => b.id - a.id);
    }
    this.setState({
      isOldestFirst: !this.state.isOldestFirst
    });
  }
  toggleSortDate(event) {
    this.sortByDate();
  }
  render() {
    const isOldest = this.state.isOldestFirst;

    return (
      <div className="activity-list">
        <h1 style={{ color: "white !important", marginTop: "5px" }}>
          All Activities
        </h1>
        <button
          onClick={this.toggleSortDate}
          style={{
            width: "150px",
            alignSelf: "center",
            background: "white",
            color: "#666"
          }}
        >
          {isOldest ? "Sort by oldest" : "Sort By Newest"}
        </button>
        {this.props.activities.map(activity => (
          <div key={activity.id}>
            {activity.editing ? (
              <EditComponent activity={activity} key={activity.id} />
            ) : (
              <Activity key={activity.id} activity={activity} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state
  };
};
export default connect(mapStateToProps)(AllActivities);
