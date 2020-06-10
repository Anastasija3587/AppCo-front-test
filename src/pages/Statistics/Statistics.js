import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import * as API from '../../services/api';
import ChartLine from '../../components/ChartLine/index';

const Statistics = ({ match }) => {
  const [user, setUser] = useState({});
  const { id } = match.params;

  useEffect(() => {
    API.fetchUserById(id).then(res => setUser(res.data[0]));
  }, [id]);

  return (
    <div className="container">
      <header className="head">AppCo</header>
      <main className="body">
        <div className="wrapLink">
          <Link
            className="wrapLink-back"
            to={{
              pathname: '/',
            }}
          >
            Main Page &gt;
          </Link>
          <Link
            className="wrapLink-back"
            to={{
              pathname: '/users',
            }}
          >
            User Statistics &gt;
          </Link>
          <p className="wrapLink-here">
            {`${user.first_name} ${user.last_name}`}
          </p>
        </div>
        <h1 className="title">{`${user.first_name} ${user.last_name}`}</h1>
      </main>
      {user.Statistics && <ChartLine statistics={user.Statistics} />}
      <footer className="wrapFoot">
        <p className="wrapFoot-logo">AppCo</p>
        <p className="wrapFoot-notice">All rights reserved by ThemeTags</p>
        <p className="wrapFoot-notice">Copyrights © 2019.</p>
      </footer>
    </div>
  );
};

Statistics.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default withRouter(Statistics);
