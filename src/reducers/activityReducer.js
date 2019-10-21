const activityReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ACTIVITY":
      return state.concat([action.data]);
    case "DELETE_ACTIVITY":
      return state.filter(activity => activity.id !== action.id);
    case "EDIT_ACTIVITY":
      return state.map(activity =>
        activity.id === action.id ? {
          ...activity,
          editing: !activity.editing
        } :
        activity
      );
    case "UPDATE":
      return state.map(activity => {
        if (activity.id === action.id) {
          return {
            ...activity,
            title: action.data.newTitle,
            description: action.data.newDescription,
            duration: action.data.newDuration,
            editing: !activity.editing
          };
        } else return activity;
      });
    default:
      return state;
  }
};
export default activityReducer;