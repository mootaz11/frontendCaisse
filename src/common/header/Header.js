import React,{useContext} from 'react'
import Carrefour from '../../assets/img/logo.jpg';
import globalContext from '../../context/globalContext'
import {
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
} from "reactstrap";
import classes from './header.module.css';
import {  NavLink } from 'react-router-dom'


export default function Header() {
	const context = useContext(globalContext)
	return (
		<div style={{ marginBottom: '60px' }} >
		 
		<Navbar className={"fixed-top " + classes.navbar} expand={"lg"}
			style={{ background : 'white' }} >
			<Container>
				
				<div className="navbar-translate">
					<NavbarBrand>
						<NavLink to={'/home'}>
						<div className={classes.navLogo} style={{ backgroundImage: `url(${Carrefour})` }}>
						</div>
						</NavLink>
					</NavbarBrand>
				</div>
					<Nav navbar>
						
						<NavItem className={classes.navItem}>
							<NavLink  to={'/orders'}  style={{ color :'black', textDecoration: 'none' ,marginRight:5}}>
								<h4>historique</h4>
							</NavLink>
						</NavItem>	
					 <NavItem className={classes.navItem}>
							<NavLink  to={'/cart'} className={`${classes.BasketContainerLight}`}
								style={{ color :'black', textDecoration: 'none' }}>
								<i className={`fas fa-shopping-cart ${classes.navMainIconsLight}`} style={{ padding: '0px 1.5px 0px 1.5px' }}></i>
								<div className={classes.numberMessagesContainer}>
									<p className={classes.numberNotifText}>{context.notif?context.notif:"0"}</p>
								</div>
							</NavLink>
						</NavItem>	
											
					</Nav>
			</Container>
		</Navbar>
	</div >
	)
}
