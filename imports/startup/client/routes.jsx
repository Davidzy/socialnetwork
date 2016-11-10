import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

// layouts and pages
import HomeLayout from '../../ui/layouts/homelayout';
import Layout from '../../ui/layouts/layout';
import Sidebar from '../../ui/components/sidebar/sidebar';
import Profile from '../../ui/components/profile/profile';
// import Profile from '../../ui/components/profile/profile';
import Main from '../../ui/components/main/main';
import Home from '../../ui/components/userhome/home'
import FriendsList from '../../ui/components/friends/friendslist'
import Messages from '../../ui/components/messages/message'


publicRoutes = FlowRouter.group({
    name: 'publicroute'
});
privateRoutes = FlowRouter.group({
    name: 'privateroute',
    triggersEnter: [(context, redirect) => {
      if (!Meteor.userId()) {
        return FlowRouter.go('/');
      }
    }]
});
publicRoutes.route('/', {
  name: 'Home',
  action() {
    mount(HomeLayout, {});
  }
});
privateRoutes.route('/dashboard', {
  name: 'Dashboard',
  action: function () {
    mount(Layout, {
      sidebar: <Sidebar />,
      content: <Main />,
    })
  }
});
publicRoutes.route('/signout', {
  name: 'Signout',
  action: function() {
    Meteor.logout( () => FlowRouter.go('/'));
  }
});
privateRoutes.route('/profile', {
  name: 'Profile',
  action: function() {
    mount(Layout, {
      sidebar: <Sidebar />,
      content: <Profile />
    })
  }
});
publicRoutes.route('/user/:fullname', {
    name: 'UserHome',
    action: function (params) {
      mount(Layout, {
        sidebar: <Sidebar />,
        content: params.fullname ? <Home fullname={params.fullname}/> : 'No User Found'
      })
    }
});
publicRoutes.route('/friends', {
    name: 'UserHome',
    action: function (params) {
      mount(Layout, {
        sidebar: <Sidebar />,
        content: <FriendsList />
      })
    }
});
privateRoutes.route('/messages', {
    name: 'Messages',
    action: function (params) {
      mount(Layout, {
        sidebar: <Sidebar />,
        content: <Messages />
      })
    }
});
