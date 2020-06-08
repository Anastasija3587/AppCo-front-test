import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3A80BA',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CustomizedTables({ users }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">IP address</StyledTableCell>
            <StyledTableCell align="center">Total Clicks</StyledTableCell>
            <StyledTableCell align="center">Total page views</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <StyledTableRow
              key={user.id}
              onClick={() => {
                console.log(user);
              }}
            >
              <StyledTableCell align="center"> {user.id}</StyledTableCell>
              <StyledTableCell align="center">
                {user.first_name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.last_name}</StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.gender}</StyledTableCell>
              <StyledTableCell align="center">
                {user.ip_address}
              </StyledTableCell>
              <StyledTableCell align="center">
                {user.Statistics.reduce((acc, elem) => acc + elem.clicks, 0)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {user.Statistics.reduce(
                  (acc, elem) => acc + elem.page_views,
                  0,
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CustomizedTables.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
