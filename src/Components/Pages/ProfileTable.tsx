import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../Pages/css/ProfileTable.css"
import { white } from 'material-ui/styles/colors';

const useStyles = makeStyles({
    table: {
        minWidth: 500,
        backgroundColor: 'red'
    },
});
const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: 'black',
      color: theme.palette.common.white,
      border: '1px solid white',
      padding: '15px',
      fontSize: '20px',

    },
    body: {
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid white',
      padding: '15px',
      fontSize: '20px',

    }
  }))(TableCell);
// const TableHead = withStyles(theme => ({
//     tablehead: {
//       backgroundColor: 'orange'
//     }
//   }))

function createData(CoinToken: string, Value: number, NoOfCoins: number) {
    return { CoinToken, Value, NoOfCoins };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];

export default function DataTable() {
    const classes = useStyles();

    return (
        <div className="MainTable">
             <div className="ProfileTable">
            <TableContainer component={Paper} >
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className="Table">
                            <StyledTableCell>Coin Token</StyledTableCell>
                            <StyledTableCell align="center">Value</StyledTableCell>
                            <StyledTableCell align="center">No Of Coins</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.CoinToken}>
                                <StyledTableCell component="th" scope="row">
                                    {row.CoinToken}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.Value}</StyledTableCell>
                                <StyledTableCell align="center">{row.NoOfCoins}</StyledTableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
       



    );
}
