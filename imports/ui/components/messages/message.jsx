import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { DBMessage } from '../../../api/messages';
import SingleMessage from './single-message';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      var rows = this.props.messages.map(function (message) {
          return <SingleMessage key={message._id} message={message} />
      });
      if(this.props.messages.length === 0){
          rows = <a href="#"><i className="fa fa-list-alt fa-2x"></i> No Messages</a>
      }
      return (
          <div className="column col-sm-7 col-xs-1 sidebar-offcanvas" id="sidebar">

              <ul className="nav">
                  <li><a href="#" data-toggle="offcanvas" className="visible-xs text-center"><i
                      className="fa fa-list-alt"></i></a></li>
              </ul>
              <ul className="nav hidden-xs push-down-50" id="lg-menu">
                  {rows}
              </ul>
          </div>
      )
  }
}

export default createContainer( () => {
  return {
    currentUser: Meteor.user(),
    messages: DBMessage.find({$or:[{'to._id': Meteor.userId()},{'fromuser':Meteor.userId()}]}, {sort:{createdOn:-1}}).fetch()
  };
}, Message);
