import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

// layouts and pages
import HomeLayout from '../../ui/layouts/homelayout';
import Layout from '../../ui/layouts/layout';
import Sidebar from '../../ui/components/sidebar/sidebar';
// import Main from '../../ui/components/main/main';
import MainContainer from '../../ui/components/main/main-container';

publicRoutes = FlowRouter.group({
    name: 'publicroute'
});
privateRoutes = FlowRouter.group({
    name: 'privateroute'
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
