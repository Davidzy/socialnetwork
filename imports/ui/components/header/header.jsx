import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messageClass: 'hidden'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  displayError(message) {
    this.setState({
      message,
      messageClass:'alert alert-danger message'
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      message: '',
      messageClass: 'hidden'
    });
    var that = this;
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email, password, function (e) {
        if(e){
            // console.log("there's error with login", e.reason);
            that.displayError(e.reason)
        } else{
            Meteor.setTimeout(function(){
                // console.log("login susscessfully!");
                FlowRouter.go('/dashboard');
            },1000)
        }
    });
  }
  render() {
    return (
      <div>
        <span className="navbar-react">
          <i className="fa fa-facebook"></i>akebook
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form onSubmit={this.handleSubmit} role="form" id="signin" className="navbar-form navbar-right">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input type="text" ref="email" id="email" className="form-control" placeholder="Email Address"></input>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input type="password" ref="password" className="form-control" placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <br/>
            <span className={this.state.messageClass}>{this.state.message}</span>
          </form>
        </div>
      </div>
    )
  }
}
