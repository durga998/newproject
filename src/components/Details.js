import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 200,
    height: 50,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 15,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Account Name', 'Sunil Kumar Purohit'),
  createData('Account Type', 'Payroll'),
  
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Account Number</StyledTableCell>
            <StyledTableCell >12573928361</StyledTableCell>      
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row"aria-label="simple table">
                {row.name}
              </StyledTableCell>
              <StyledTableCell aria-label="simple table" >{row.calories}</StyledTableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}