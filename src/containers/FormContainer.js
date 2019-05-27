import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => {
  return {
    currentActivity: state.currentActivity
  }
}


const mapDispatchToProps = (dispatch) => ({
  getActivity(event){
    event.preventDefault();
    console.log('CALL');
    dispatch(()=>{
      fetch(`https://www.boredapi.com/api/activity/`)
      .then(res => res.json())
      .then(activity =>{
        if (activity.key) {
          dispatch({
            type:'NEW_ACTIVITY',
            activity
          })
        } else {
          dispatch({
            type: 'NO_ACTIVITY',
          })
        }
      })
    })
  },
  addActivity(date){
    dispatch({
      type: 'ADD_ACTIVITY',
      date
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
