import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

// layouts and pages
import HomeLayout from '../../ui/layouts/homelayout';
import Layout from '../../ui/layouts/layout';
import Sidebar from '../../ui/components/sidebar/sidebar';
import MainContainer from '../../ui/components/main/main-container';

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
    content: <MainContainer />,
    })
  }
});
publicRoutes.route('/signout', {
  name: 'Signout',
  action: function() {
    Meteor.logout( () => FlowRouter.go('/'));
  }
});
