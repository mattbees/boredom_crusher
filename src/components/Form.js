import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      added: false
    }
    console.log(this.props);
    this.checkProps = this.checkProps.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderActivity = this.renderActivity.bind(this);
    this.confirmAdded = this.confirmAdded.bind(this);
    this.getActivityOnClick = this.getActivityOnClick.bind(this);
  }

  // is this a global variable?
  onDateChange = date => {
    this.setState({ date })
  }

  checkProps() {
    return this.props.currentActivity ?
    this.renderActivity() : '';
  }

  renderActivity() {
    return (
      <>
        <h1 className='form-element'>{this.props.currentActivity.activity}</h1>
        <h4 className='form-element'>Diarise it!</h4>
        <Calendar
          className='calendar'
          onChange={this.onDateChange}
          value={this.state.date}
          minDate={new Date()}
        />
        <input className='button' type='submit' value='Add to wishlist' />
      </>
    )
  }

  confirmAdded() {
    return this.state.added ? <h1>Added to wishlist!</h1> : null;
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addActivity(this.state.date);
    this.setState({ added: true , date: null });
  }

  getActivityOnClick(evt) {
    evt.preventDefault();
    this.props.getActivity();
    this.setState({ added: false });
  }

  render() {
    return(
      <div className='form-div'>
        <form className='form-element' onSubmit={this.handleSubmit}>
          <button
            className='button'
            onClick={this.getActivityOnClick}>
            Bored? Find something to do.
          </button>
          <div className='form-element'>{this.checkProps()}</div>
          <div className='form-element'>{this.confirmAdded()}</div>
        </form>
      </div>
    )
  }

}

export default Form;
