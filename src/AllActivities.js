import React, { Component } from "react";

import { connect } from "react-redux";

import Activity from "./Activity";

import EditComponent from "./EditComponent";

class AllActivities extends Component {
  render() {
    return (
      <div className="activity-list">
        <h1>All Activities</h1>
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
