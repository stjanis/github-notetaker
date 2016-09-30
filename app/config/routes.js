// routes.js - the instruction sheet for router
// so router knows which react components to render
// based on which path we're at

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

// IndexRoute - "default path". basically IndexRoute says "specify or
// activate this component, if none of the other routes match"
export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
