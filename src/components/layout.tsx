/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import './global.css';
import './reset.css';

const Layout: React.FC = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

export default Layout;
