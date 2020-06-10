import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Table from '../../components/Table/index';
import * as API from '../../services/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    API.fetchUsers(page).then(res => setUsers(res.data));
  }, [page]);

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
          <p className="wrapLink-here">User Statistics</p>
        </div>
        <h1 className="title">Users statistics</h1>
        <Table users={users} />
      </main>
      <div className="clicks">
        <button
          className="click"
          type="button"
          onClick={() => setPage(page - 1)}
        >
          <svg
            width="17"
            height="28"
            viewBox="0 0 17 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M15 2L3 14L15 26"
              stroke="#9c9c9c"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="click"
          type="button"
          onClick={() => setPage(page + 1)}
        >
          <svg
            width="17"
            height="28"
            viewBox="0 0 17 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M2 2L14 14L2 26"
              stroke="#9c9c9c"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <footer className="wrapFoot">
        <p className="wrapFoot-logo">AppCo</p>
        <p className="wrapFoot-notice">All rights reserved by ThemeTags</p>
        <p className="wrapFoot-notice">Copyrights © 2019.</p>
      </footer>
    </div>
  );
};

export default Users;
