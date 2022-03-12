import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Alert} from 'react-bootstrap';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from '../CartWidget';
import Login from '../../components/Login';


const NavBar = () => {

    const { cantidades,orderCreatedId, getCarritoStorage } = useContext(CartContext);

    useEffect(() => {
        if(cantidades<=0){
        getCarritoStorage();}
      }, [cantidades]);
    
    return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className="justify-content-center">
        <Container>
        <a> <img src="wine.png" width="30" height="30" className="d-inline-block align-top blogo" alt="logo" /> </a>
        <Navbar.Brand><NavLink  style={{textDecoration: 'none'}} to={ `/` }>Drink&Eat</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
            <Nav className="me-auto">
            <NavLink  style={{textDecoration: 'none'}} to={ `/` }><FontAwesomeIcon icon={faHome} /> Inicio</NavLink>
            <NavLink  style={{textDecoration: 'none'}} to={ `/categoria/1` }>Vinos</NavLink>
            <NavLink  style={{textDecoration: 'none'}} to={ `/categoria/2` }>Cervezas</NavLink>
            <NavLink  style={{textDecoration: 'none'}} to={ `/categoria/3` }>Gourmet</NavLink>
            <NavLink  style={{textDecoration: 'none'}} to={ `/carrito` }><CartWidget cant={cantidades}/></NavLink>
                
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        <br></br>
        <Login />
        {orderCreatedId != null && <Alert key={orderCreatedId} variant='success'>Se ha generado su pedido # {orderCreatedId}</Alert>}
        <br></br>
</div>
    )
};

export default NavBar

