import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';
import Footer from './components/Footer';

// router will be handling different routes in our app
render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);

// just some random extra element
render(
  <Footer />,
  document.getElementById('footer')
);
