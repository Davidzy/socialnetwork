import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Avatar from '../avatar/avatar';
import Message from '../messages/message';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: FlowRouter.getParam("fullname"),
      status: '',
      message: 'row hide'
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.askFriend = this.askFriend.bind(this);
  }
  sendMessage(e) {
    e.preventDefault();
    var subject = ReactDOM.findDOMNode(this.refs.subject).value;
    var message = ReactDOM.findDOMNode(this.refs.message).value;
    Meteor.call('sendMessage',this.props.homeUser._id, subject, message);
    this.setState({message:'row hide',status:'Message Sent'});
  }
  showSendMessage() {
      var message = 'row';
      if(this.state.message.indexOf('hide')=== -1){
          message = 'row hide';
      }
      this.setState({message, status:''});
  }
  askFriend() {
    if (this.props.homeUser._id !== Meteor.userId() && this.props.homeUser.profile.friends.indexOf(Meteor.userId()) === -1){
        let msg = this.props.homeUser.profile.firstname + ' ' + this.props.homeUser.profile.lastname + ' wants to be your friend.';
        Meteor.call('sendMessage',this.props.homeUser._id, 'Please Confirm', msg);
        this.setState({status: 'Friendship Requested'});
    } else {
        this.setState({status: 'You are already friends ;)'});
    }
  }
  render() {
    return (
      <div>
        <Message />
        <div className="col-md-9">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2><Avatar user={this.props.homeUser && this.props.homeUser._id}/></h2>
            </div>
            <div className="panel-body">
              <h2>{this.props.homeUser && this.props.homeUser.profile.firstname} {this.props.homeUser && this.props.homeUser.profile.lastname}</h2>
              <hr/>
              <button  className="btn btn-lg btn-success space">Request Friend</button>
              <button  type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Send a Message</button>
            </div>
            <h3>{this.state.status}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(({ fullname }) => {
  let userfullname = fullname;
  return {
    currentUser: Meteor.user(),
    homeUser: Meteor.users.findOne({'profile.fullname': userfullname}),
  }
}, Home);
