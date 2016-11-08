import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import SignupForm from './signupform';

export default createContainer(() => {
  let data = {};
  data.currentUser = Meteor.user();
  return data;
}, SignupForm);
