import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, CardText, CardTitle, CardSubtitle, Button, CardImg, CardBody, Card, Modal, Label } from 'reactstrap'
import classes from './products.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import {Input} from '@material-ui/core';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

import custom_axios from '../customAxios'


const media_root="http://localhost:8000"
const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },

    absolute: {
        position: 'fixed',
        bottom: 10,
        right: 10,

    },
}));


export default function Products() {
    const [open, setOpen] = React.useState(false);
    const [products,setProducts]=React.useState([])
    const [offre,setOffreChecked]=React.useState(false);
    const [remise,setRemise]=React.useState(false);
    const [product,setProduct]=React.useState({name:"",price:0,quantity:1,remise:false,offre:false})
    const [imageProduct,setImageProduct]=React.useState();
    const FabClasses = useStyles();
    const handleClose = () => { }

    useEffect(()=>{
        custom_axios.get('/product/getAll/').then(res=>{
            if(res.status===200){
            setProducts(res.data)
            }
        })
    },[])    

    const addToCart=(product)=>{
            if(!localStorage.getItem('panier')){
                custom_axios.post('/order/create/',{'product':product,quantity:1}).then(res=>{
                    if(res.status===201){
                        localStorage.setItem('panier',res.data.id)
                    }
                })
            }
            else {

                custom_axios.patch(`/order/update/${localStorage.getItem('panier')}/`,{'product':product,quantity:1}).then(res=>{
                    if(res.status===200){
                toastr.success('Order Passed', 'passing order', {displayDuration:3000})
    }
                })
            }
    }

    const addProductHandler=()=>{
        if(product.name!=="" && product.price>0&&imageProduct){
        const fd = new FormData()
        fd.append('image', imageProduct)
        fd.append('name',product.name);
        fd.append('stock',product.quantity);
        fd.append('price',product.price);
        fd.append('remise',product.discount);
        fd.append('offer',product.offre);
            custom_axios.post('/product/create/',fd).then(res=>{
                if(res.status===201){
                    setProducts([...products,res.data])
                    setOpen(!open)
                }
            }).catch(err=>{
                alert("error occured")
            })}

        else {
            alert("please check ur inputs")
        }
    }


    return (
        <Container fluid className={classes.mainContainer}>

            <Row>
                <Col md="12" lg="12" className={classes.headerContainer}>
                    <text className={classes.headerTitle}>Our Products</text>
                </Col>
            </Row>
            <Row>
                {products.map((value, index) =>
                    <Col lg="3" md="4" key={index}>
                        <Card className={classes.cardProduct}>
                        <CardImg  top width={"100%"} height={150} src={media_root+value.image}  alt="Veg1"/>
                            <CardBody>
                                <CardTitle tag="h5">{value.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{value.price} €</CardSubtitle>
                                <Button onClick={()=>{addToCart(value)}} color={"primary"} >Add To Cart</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
            <Modal
                isOpen={open}
                onClose={()=>{handleClose()}}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modalBody}>
                    <div className={classes.titleBody}>
                        <h1>add Product</h1>


                    </div>
                    <div className={classes.addProductBody}>
                            <Label for="exampleFile" style={{ fontSize: 22 }}>product name: </Label>
                            <Input className={classes.input} value={product.name} onChange={(evt)=>{setProduct({...product,name:evt.target.value})}} />
                            <Label for="exampleFile" style={{ fontSize: 22 }}>product quantity: </Label>
                            <Input className={classes.input} value={product.quantity} onChange={(evt)=>{setProduct({...product,quantity:evt.target.value})}} />
                            <Label for="exampleFile" style={{ fontSize: 22 }}>product price:</Label>
                            <Input className={classes.input} value={product.price} onChange={(evt)=>{setProduct({...product,price:evt.target.value})}} />
                            <Label for="exampleFile" style={{ fontSize: 22 }}>product Image : </Label>
                            <Input type="file" name="file" onChange={(evt)=>{setImageProduct(evt.target.files[0])}} id="exampleFile" />
                        <div className={classes.check}>
                            <Label style={{ fontSize: 22 }}>Remise 50%</Label>
                            <Checkbox
                                checked={remise}
                                onChange={() => { setRemise(!remise); setProduct({...product,remise:!remise}) }}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <Label style={{ fontSize: 22 }} >offre</Label>
                            <Checkbox
                                checked={offre}
                                onChange={() => {setOffreChecked(!offre) ;setProduct({...product,offre:!offre}) }}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                    </div>
                    <div className={classes.addProductFooter}>
                        <Button className={classes.button} color="primary" onClick={()=>{addProductHandler()}}>Add Product</Button>{' '}
                        <Button className={classes.button} color="danger" onClick={() => { setOpen(!open) }}>Close</Button>{' '}


                    </div>
                </div>
            </Modal>
            <Tooltip title="Add" aria-label="add">
                <Fab onClick={() => { console.log(open); setOpen(!open) }} color="primary" className={FabClasses.absolute}>
                    <AddIcon />
                </Fab>
            </Tooltip>

        </Container>
    )
}
