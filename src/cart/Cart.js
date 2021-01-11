import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classes from '../cart/cart.module.css';
import cart from '../assets/img/sprite.png'
import { Button } from 'reactstrap';
import custom_axios from '../customAxios';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';


const TAX_RATE = 0.07;
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Cart() {
  const tableClasses = useStyles();
  const [order,setOrder]=useState(null)




  useEffect(()=>{

    if(localStorage.getItem("panier")){
    custom_axios.get(`/order/${localStorage.getItem("panier")}/`).then(res=>{
      if(res.status===200){
        console.log(res.data)
        setOrder(res.data)
      }
    })
    .catch(err=>{
      alert("error occured");
    })
  }
    },[])

const passOrder=()=>{
  if(localStorage.getItem("panier")){
    custom_axios.post(`/order/pass/${localStorage.getItem("panier")}/`,{}).then(res=>{
      if(res.status===200){
        //toastr.success('Order Passed', 'passing order', {displayDuration:3000})
        alert("done")
      }
    })
  }
}

  return (
      <div className={classes.cart}>
          <div className={classes.products}>
            <img src={cart}/>
            <h1 className={classes.h1}>voila votre caddie</h1>
          </div>
      <div className={classes.order}>
    <TableContainer component={Paper}>
      <Table className={tableClasses.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order&&order.products.map((value) => (
            <TableRow key={value.product.id}>
              <TableCell>{value.product.name}</TableCell>
              <TableCell align="right">{value.orderProduct.quantity}</TableCell>
              <TableCell align="right">{value.product.price} €</TableCell>
            </TableRow>
          ))}

    
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{order&&order.order.total }€</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={()=>{passOrder()}} className={classes.button} color="primary">passer la commande</Button>{' '}

    </div>
   
    </div>
  );
}
