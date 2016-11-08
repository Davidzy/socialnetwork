import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import Main from './main';

export default MainContainer = createContainer(() => {
  // const images = Images.find().fetch();
  // return {
  //   images
  // };
  let data = {};
  data.posts = [];
  data.ads = [];
  data.posts = Posts.find({}, {sort: {createdAt: -1}}).fetch();
  data.ads = DBAds.find({}, {}).fetch();
  return data;
}, Main);
