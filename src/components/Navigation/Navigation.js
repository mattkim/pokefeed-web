/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

function Navigation({ className }) {
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={s.link} to="/">Home</Link>
      <Link className={s.link} to="/post">Post</Link>
      {/*
      <Link className={s.link} to="/feedback">Feedback</Link>
      <Link className={s.link} to="/profile">Profile</Link>
      <Link className={s.link} to="/login">Log in</Link>
      <Link className={s.link} to="/register">Sign up</Link>
      */}
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);
