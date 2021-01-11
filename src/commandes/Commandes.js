import React,{useState,useEffect} from 'react';
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
import custom_axios from '../customAxios'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const orders = [
  {id:122,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:123,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:124,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:125,totale:555, date:"08/01/2021",ticket:"ticket1"},
  {id:126,totale:555, date:"08/01/2021",ticket:"ticket1"},
];

const media_root="http://localhost:8000/media"

export default function Commandes() {
    const tableClasse = useStyles();
    const [historique,setHistorique]=useState([]);
    useEffect(()=>{
      custom_axios.get('/order/passed/').then(res=>{
        if(res.status===200){
          console.log(res.data)
          setHistorique(res.data);
        }
      }).catch(err=>{
        alert("error occured")
      })
    },[])
const openTicket=(ticket)=>{
  console.log(ticket)
  window.open(media_root+"/"+ticket)
}    
    return (
    <Container fluid className={classes.mainContainer}>

    <Row>
        <Col md="12" lg="12" className={classes.headerContainer}>
            <text className={classes.headerTitle}>historique</text>
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
          {historique.map((passedOrder) => (
            <TableRow key={passedOrder.order.id}>
              <TableCell component="th" scope="row">
                {passedOrder.order.id}
              </TableCell>
              <TableCell align="right">{passedOrder.order.total} €</TableCell>
              <TableCell align="right">{passedOrder.order.date.split('T')[0]}</TableCell>
              <TableCell align="right">{passedOrder.order.id}</TableCell>
              <TableCell align="right">
                  <Button onClick={()=>{openTicket(passedOrder.Ticket)}} color="primary">ouvrir ticket</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
