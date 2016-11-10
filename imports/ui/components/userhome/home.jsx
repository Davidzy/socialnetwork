import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Avatar from '../avatar/avatar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: FlowRouter.getParam("fullname"),
      status: '',
      message: 'row hide'
    }
  }
  render() {
    return (
      <div>
        messageForm
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
