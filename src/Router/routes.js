import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/HomePage'));
const Helpline = React.lazy(() => import('../Views/Helpline'));
const About = React.lazy(() => import('../Views/About'));
const TestCenter = React.lazy(() => import('../Views/TestCenter'));
const PrivacyPolicy = React.lazy(() => import('../Views/PrivacyPolicy'));
const Disclaimer = React.lazy(() => import('../Views/Disclaimer'));
const CookiesPolicy = React.lazy(() => import('../Views/CookiesPolicy'));
const TermCondition = React.lazy(() => import('../Views/TermCondition'));
const News = React.lazy(() => import('../Views/News'));

const routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },

  { path: '/home', name: 'Home', component: Home, exact: true },
  { path: '/helpline', name: 'Helpline', component: Helpline, exact: true },
  { path: '/about', name: 'About', component: About, exact: true },
  { path: '/test-center', name: 'TestCenter', component: TestCenter, exact: true },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy, exact: true },
  { path: '/disclaimer', name: 'Disclaimer', component: Disclaimer, exact: true },
  { path: '/cookies-policy', name: 'CookiesPolicy', component: CookiesPolicy, exact: true },
  { path: '/term-condition', name: 'TermCondition', component: TermCondition, exact: true },
  { path: '/news', name: 'News', component: News, exact: true },
];

export default routes;
