const activityReducer = (state, action) => {
  switch(action.type) {
    case 'NEW_ACTIVITY':
      console.log(action.activity);
      return { ...state, currentActivity: action.activity };
    case 'ADD_ACTIVITY':
      const addedActivity = {
        ...state.currentActivity, date: action.date
      }
      return {
        currentActivity: null,
        selectedActivities: [ ...state.selectedActivities, addedActivity ]
      };
    default:
      return state
  };
};

export default activityReducer;
