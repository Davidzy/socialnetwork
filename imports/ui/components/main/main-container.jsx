import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import Main from './main';
import { Posts } from '../../../api/posts';
import { DBAds } from '../../../api/ads';

export default MainContainer = createContainer(() => {
  let data = {};
  data.posts = [];
  data.ads = [];
  data.posts = Posts.find({}, {sort: {createdAt: -1}}).fetch();
  data.ads = DBAds.find({}, {}).fetch();
  return data;
}, Main);
