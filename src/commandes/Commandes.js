import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Row,Col,Container,Button} from 'reactstrap';
import classes from './commandes.module.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const orders = [
  {id:122,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:123,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:124,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:125,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:126,totale:555, date:"08/01/2021",ticket:"ticket1"},

];

export default function Commandes() {
    const tableClasse = useStyles();
  return (
    <Container fluid className={classes.mainContainer}>

    <Row>
        <Col md="12" lg="12" className={classes.headerContainer}>
            <text className={classes.headerTitle}>Commandes</text>
        </Col>
    </Row>
    <TableContainer component={Paper}>
      <Table className={tableClasse.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">total</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">ticket</TableCell>
            <TableCell align="right">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell component="th" scope="row">
                {order.id}
              </TableCell>
              <TableCell align="right">{order.totale} €</TableCell>
              <TableCell align="right">{order.date}</TableCell>
              <TableCell align="right">{order.ticket}</TableCell>
              <TableCell align="right">
                  <Button color="primary">ouvrir ticket</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
