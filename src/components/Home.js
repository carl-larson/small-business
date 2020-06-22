import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import cookie from 'cookie';
import Total from '../containers/Total'

// import businesses from '../businesses.json'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Home = (props) => {
    const cookies = cookie.parse(document.cookie);
    const verified = cookies['username'] ? true : false;
  
  const handleClick = (idx) => {
    if(verified) {
      props.removeBusiness(idx)
    }
  }
  
  const classes = useStyles();

  // const deleteButton = verified ? <div></div> : <Button onClick={() => {}}><DeleteIcon /></Button>
  // console.log(businesses)
  
  return (
    <div>


    <Total />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >Hours</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, idx) => (
            <TableRow key={business.id}>
              <TableCell component="th" scope="row">
                <Link to={`/business/${business.id}`}>{business.Name}</Link>
              </TableCell>
              <TableCell align="right">{business["Hours"]}</TableCell>
              <TableCell align="right">{business["Address"]}</TableCell>
              <TableCell align="right"><Button onClick={() => handleClick(idx)}><DeleteIcon /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Home 