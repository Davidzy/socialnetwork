import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import Profile from './profile';

export default createContainer(() => {
  let data = {};
  data.currentUser = Meteor.user();
  return data;
}, Profile);
