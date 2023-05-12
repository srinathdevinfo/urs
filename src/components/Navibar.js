import React from 'react';
import { Link } from 'react-router-dom';

const Navibar = () => (
  <nav className="navbar sticky-top navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Sticky top</Link>
    </div>
  </nav>
);

export default Navibar;
