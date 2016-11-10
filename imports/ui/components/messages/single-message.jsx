import React from 'react';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { DBMessage } from '../../../api/messages';
import Avatar from '../avatar/avatar';

export default class SingleMessage extends React.Component {
  removeMessage(e) {
      e.preventDefault();
      console.log(e.target);
      Meteor.call('Message.remove', e.target.id);
  }
  acceptFriendREQ(e) {
    e.preventDefault();
    Meteor.call('confirmFriend', this.props.message);
  }
  render() {
    let message = this.props.message;
    let msgfrom = Meteor.users.findOne({_id: message.fromuser});
    let timesince = moment(message.createdOn).fromNow();
    let klass='primary-font text-muted';
    if (message.fromuser === Meteor.userId()) {
        klass = 'primary-font green  text-muted';
    }
    let address = <strong className={klass}>{msgfrom && msgfrom.profile.firstname} {msgfrom && msgfrom.profile.lastname}{message.fromuser === Meteor.userId()? ' -> ' + message.to.profile.firstname + ' ' + message.to.profile.lastname:'' }</strong>
    return (
      <li className="left clearfix">
        <span className="chat-img pull-left">
          <Avatar key={message._id} user={msgfrom._id} klass="img-circle"/>
        </span>
          <div className="chat-body clearfix">
              <div className="header">
                  {address}
                  <small className="pull-right text-muted">
                    <span className="fa fa-time"></span>{timesince}
                    <span id={message._id} onClick={this.removeMessage.bind(this)} className="fa fa-trash"></span>
                  </small>
              </div>
              <p>
                <strong>{message.title}</strong>
                <button className={message.friendREQ ? "btn": "hidden"} onClick={this.acceptFriendREQ.bind(this)}>Accept</button>
                <br/>
                {message.message}
              </p>
          </div>
      </li>
    )
  }
}
