import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Friend from './single-friend'

class FriendsList extends React.Component {
  render() {
    let rows = '';
    if (this.props.currentUser && this.props.currentUser.profile.friends.length > 0) {
      rows = this.props.currentUser.profile.friends.map( (userfriend) =>
        <Friend key={userfriend} userId={userfriend} />
      )
    }
    else {
      rows = <a href="#"><i className="fa fa-list-alt fa-2x top50"></i> No Friends</a>
    }
    return (
      <div className="container ">
          {rows}
      </div>
    )
  }
}

export default createContainer(() => {
  return {currentUser: Meteor.user()}
}, FriendsList);
