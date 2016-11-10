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
    this.showSendMessage = this.showSendMessage.bind(this);
    this.askFriend = this.askFriend.bind(this);
  }
  sendMessage(e) {
    e.preventDefault();
    let subject = ReactDOM.findDOMNode(this.refs.subject).value;
    let message = ReactDOM.findDOMNode(this.refs.message).value;
    let friendREQ = false;
    Meteor.call('sendMessage',this.props.homeUser._id, subject, message, friendREQ);
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
        let friendREQ = true;
        Meteor.call('sendMessage', this.props.homeUser._id, 'Please Confirm', msg, friendREQ);
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
              <button onClick={this.askFriend} className="btn btn-lg btn-success space">Request Friend</button>
              <button onClick={this.showSendMessage} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Send a Message</button>
            </div>
            <h3>{this.state.status}</h3>
          </div>

          <div className={this.state.message}>
              <div className="col-md-8">
                  <div className="well well-sm">
                      <form id="messageForm">
                          <div className="row">
                              <div className="col-md-12">

                                  <div className="form-group">
                                      <label htmlFor="email">
                                          To:</label>
                                      <div className="input-group">
                              <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                              </span>
                                          <input readOnly type="to" id="to" name="to" className="form-control" placeholder="Send Message To"  value={this.props.homeUser && this.props.homeUser.profile.firstname + " " + this.props.homeUser.profile.lastname}/>
                                      </div>

                                      <div className="form-group">
                                          <label htmlFor="subject">
                                              Subject</label>
                                          <input type="text" ref="subject" id="subject" name="subject" className="form-control" placeholder="Subject" required="required" />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="name">
                                              Message</label>
                                          <textarea ref="message" name="message" id="message" className="form-control" rows="9" cols="25" required="required" placeholder="Message"></textarea>
                                      </div>

                                  </div>

                              </div>

                              <div className="col-md-12">


                                  <div className="control-group">
                                      <label className="control-label" htmlFor="button1id"></label>
                                      <div className="controls">
                                          <button onClick={this.sendMessage} id="button1id" name="button1id" className="btn btn-success space">Send</button>
                                          <button id="button2id" name="button2id" className="btn btn-danger space">Clear</button>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              <div className="col-md-4">
              </div>
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
