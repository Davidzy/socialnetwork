import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from '../avatar/avatar';
import Fullname from '../user/fullname';

export default class Friend extends React.Component {
  render() {
    let friendId = this.props.userId;
    let friend = Meteor.users.findOne({_id: friendId});
    if (friend) {
      let fullname = (friend.profile.firstname + friend.profile.lastname).toLowerCase();
      let link = '/user/' + fullname;
      return (
        <div className="space well col-md-3">
          <Avatar user={friend._id}/>
          &nbsp;<Fullname user={friend._id}/>
        </div>
      )
    }
  }
}
