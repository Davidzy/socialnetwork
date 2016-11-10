import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class Fullname extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
      var fullname='';
      var personlink = '';
      if(this.props.usr) {
          fullname= this.props.usr.profile.firstname + " " + this.props.usr.profile.lastname;
          personlink = '/user/' + (this.props.usr.profile.firstname + this.props.usr.profile.lastname).toLowerCase();
      }
      return (
          <a className={this.props.klass} href={personlink}>{fullname}</a>
      )
  }
}

export default createContainer(({ user }) => {
  let userId = user;
  return {
    usr: Meteor.users.findOne({_id: userId})
  }
}, Fullname);
