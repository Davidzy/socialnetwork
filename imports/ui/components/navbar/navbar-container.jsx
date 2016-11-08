import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import Navbar from './navbar';

export default createContainer(() => {
  let data = {};
  data.currentUser = Meteor.user();
  return data;
}, Navbar);
