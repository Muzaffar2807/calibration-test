import React from 'react';
import "./Layout.scss";
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="content-main">
        <div className="header-layout-customer">
          <Header />
        </div>
        <div className="content-layout">{props.children}</div>
        
      </div>
    </div>
  );
}

export default Layout