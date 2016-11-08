import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import Avatar from './avatar';

export default createContainer(({user}) => {
  let data = {};
  // let userhandle = Meteor.subscribe('userlist', this.props.user);
  // let imagehandle = Meteor.subscribe('imagelist',this.props.user);
  data.usr = Meteor.users.findOne({_id: user});
  data.img = '';
  // if (data.usr) {
  //   data.img = Images.findOne({_id: data.usr.profile.avatar});
  // }
  return data;
}, Avatar);
