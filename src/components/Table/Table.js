import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Table = ({ users }) => {
  return (
    <>
      <ul className="lists top">
        <li className="lists-item id">Id</li>
        <li className="lists-item first">First Name</li>
        <li className="lists-item last">Last Name</li>
        <li className="lists-item mail">Email</li>
        <li className="lists-item gender">Gender</li>
        <li className="lists-item address">IP address</li>
        <li className="lists-item click">Total clicks</li>
        <li className="lists-item pages">Total page views</li>
      </ul>
      {users.map(user => (
        <Link
          className="link"
          key={user.id}
          to={{
            pathname: `/users/${user.id}`,
          }}
        >
          <ul className="lists">
            <li className="lists-item roll id">{user.id}</li>
            <li className="lists-item roll first">{user.first_name}</li>
            <li className="lists-item roll last">{user.last_name}</li>
            <li className="lists-item roll mail">{user.email}</li>
            <li className="lists-item roll gender">{user.gender}</li>
            <li className="lists-item roll address">{user.ip_address}</li>
            <li className="lists-item roll click">
              {user.Statistics.reduce((acc, elem) => acc + elem.clicks, 0)}
            </li>
            <li className="lists-item roll pages">
              {user.Statistics.reduce((acc, elem) => acc + elem.page_views, 0)}
            </li>
          </ul>
        </Link>
      ))}
    </>
  );
};

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Table;
