// TODO: build a view to list the state.selectedActivities array in date order
// then refactor the reducer into two reducers

import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {

  var listItems = props.activities.map((thisActivity, i) => {
    return (
      <div>
        <h3>{thisActivity.activity}</h3>
        <ul key={i}>
          <li></li>
          <li>{`Participants: ${thisActivity.participants}`}</li>
          <li>{`Price: ${thisActivity.price}`}</li>
          {/*<li>{`Date: ${(thisActivity.date).toDateString()}`}</li>*/}
        </ul>
      </div>
    )
  })

  return <div>{listItems}</div>;

}

const mapStateToProps = (state) => {
  return {
    activities: state.selectedActivities
  }
}

export default connect(mapStateToProps)(List);
