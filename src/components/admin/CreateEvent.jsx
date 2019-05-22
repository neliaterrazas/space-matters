import React from 'react';
import { connect } from 'react-redux';
import { createNextEvent } from '../../store/actions/nextEventActions';
import {Redirect} from 'react-router-dom';

class CreateEvent extends React.Component{
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createNextEvent(this.state)
  }

  render(){
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Event</h5>

            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createNextEvent: (nextEvent) => dispatch(createNextEvent(nextEvent))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
