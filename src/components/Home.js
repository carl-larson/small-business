import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

import businesses from '../businesses.json'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Home() {
  const classes = useStyles();
  console.log(businesses)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {businesses.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Link to={`/business/${row.id}`}>{row.Name}</Link>
              </TableCell>
              <TableCell align="right">{row.Hours}</TableCell>
              <TableCell align="right">{row.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home 