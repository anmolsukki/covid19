import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/HomePage'));
const Helpline = React.lazy(() => import('../Views/Helpline'));
const About = React.lazy(() => import('../Views/About'));

const routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },

  { path: '/home', name: 'Home', component: Home, exact: true },
  { path: '/helpline', name: 'Helpline', component: Helpline, exact: true },
  { path: '/about', name: 'About', component: About, exact: true },
];

export default routes;
