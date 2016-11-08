import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import SignupForm from './signupform';

export default createContainer(() => {
  // const images = Images.find().fetch();
  // return {
  //   images
  // };
  let data = {};
  data.currentUser = Meteor.user();
  return data;
}, SignupForm);
