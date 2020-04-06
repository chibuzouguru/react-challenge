import React from 'react';
import LoginPage from 'pages/login/LoginPage';
import cn from './RootPage.module.scss';

const RootPage = () => (
  <div className={cn.page}>
    <LoginPage />
  </div>
);

export default RootPage;
