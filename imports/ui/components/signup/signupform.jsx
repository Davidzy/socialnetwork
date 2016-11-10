import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {FlowRouter} from 'meteor/kadira:flow-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messageClass: 'hidden'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // getMeteorData() {
  //   let data = {};
  //   data.currentUser = Meteor.user();
  //   return data;
  // }
  displayError(message) {
    this.setState({message, messageClass: 'alert alert-danger registerError'})
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({message: '', messageClass: 'hidden'});
    var that = this;
    var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
    var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    var user = {
        email,
        password,
        profile: {
            fullname: (first_name + last_name).toLowerCase(),
            firstname: first_name,
            lastname: last_name,
            avatar: 'http://placehold.it/150x150',
            friends: []
        }
    };
    // console.log(user);
    Accounts.createUser(user, function (err) {
        if (err) {
            that.displayError(err.reason);
        } else {
            FlowRouter.go('/dashboard');
        }
    })
  }
  render() {
    return (
        <div className="row">
            <div className="signup">
                <h1>Sign Up</h1>
                <p className="text-muted">It's free and always will be.</p>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                          <input ref="first_name" type="text" placeholder="First name"
                             className="form-control"/>
                        </div>
                        <div className="col-sm-6 form-group">
                          <input ref="last_name" type="text" placeholder="Last name"
                             className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Email or mobile number" ref="email"
                         className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="New password" ref="password"
                         className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-md btn-success">Sign Up</button>
                    <span className={this.state.messageClass}>{this.state.message}</span>
                </div>
            </form>
        </div>
    )
  }
}

export default createContainer( () => {
  return {
    currentUser: Meteor.user()
  }
}, SignupForm);
