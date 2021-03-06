import React from 'react';
import ReactDOM, {render} from 'react-dom';
// get Router and hashHistory properties from react-router object
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';
import Footer from './components/Footer';

// router will be handling different routes in our app
render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);

// some extra test element
render(
  <Footer />,
  document.getElementById('footer')
);
