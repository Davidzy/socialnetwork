import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from '../avatar/avatar';
import Fullname from '../user/fullname';

class FriendsList extends React.Component {
  render() {
    let rows = '';
    if (this.props.currentUser && this.props.currentUser.profile.friends.length > 0) {
      rows = this.props.currentUser.profile.friends.map( (userfriend) => {
        let friend = Meteor.users.findOne({_id: userfriend});
        if (friend) {
          var fullname = (friend.profile.firstname + friend.profile.lastname).toLowerCase();
          var link = '/user/' + fullname;
          return (
            <div key={userfriend._id} className="space well col-md-3">
                <Avatar user={friend._id}/>
                &nbsp;<Fullname user={friend._id}/>
            </div>
          )
        }
      })
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
