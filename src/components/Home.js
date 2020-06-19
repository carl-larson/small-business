import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import businesses from '../businesses.json'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, hours, address) {
//   return { name, hours, address };
// }


// const rows = createRows();
// function createRows() {  
//   for(let id = 0; id < businesses.length; id++) {
//     return createData(businesses[id].name, businesses[id].Hours, businesses[id].Address)
//   }
// }

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
                {row.Name}
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