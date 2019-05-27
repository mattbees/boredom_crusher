import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
    console.log(this.props);
    this.checkProps = this.checkProps.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderActivity = this.renderActivity.bind(this);
  }

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
        <h1>{this.props.currentActivity.activity}</h1>
        <h4>Diarise it!</h4>
        <Calendar
          onChange={this.onDateChange}
          value={this.state.date}
        />
        <input type='submit' value='Add to wishlist' />
      </>
    )
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addActivity(this.state.date);
  }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.props.getActivity}>Bored? Find something to do.
          </button>
          <div>{this.checkProps()}</div>
        </form>
      </>
    )
  }

}

export default Form;
