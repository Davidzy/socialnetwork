import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import header from './header';

export default createContainer(() => {
  let data = {};
  data.currentUser = Meteor.user();
  return data;
}, header);
