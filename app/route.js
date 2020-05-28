import React from 'react';
import Bundle from './Bundle'; //按需加载

// home页面
import HomeContainer from 'bundle-loader?lazy&name=[name]!./pages/home/index.js';
const HomeComponent = (props) => (
  <Bundle load={HomeContainer}>
    {(HomeComponent) => <HomeComponent {...props}/>}
  </Bundle>
);

// 图表页面
import StatementContainer from 'bundle-loader?lazy&name=[name]!./pages/statement/index.js';
const StatementComponent = (props) => (
  <Bundle load={StatementContainer}>
    {(StatementComponent) => <StatementComponent {...props}/>}
  </Bundle>
);

const routes = [
  { path: '/home',
      exact: true,
      component: HomeComponent
  },
  {
      path: '/statement',
      component: StatementComponent
  }
];

export default routes;
