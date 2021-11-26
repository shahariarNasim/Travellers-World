import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'



const Header = () => {
    const {user, logOut} = useAuth();
  return (
    <div className='bg-success'>
    <Navbar collapseOnSelect style={{backgroundColor:'lightgray'}} expand="lg"  sticky="top">
  
            <Navbar.Brand href="#home" style={{color:'indigo'}} ></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="link" as={Link} to="/Home">Home</Nav.Link>
                <Nav.Link className="link" as={Link} to="/Services">Services</Nav.Link>
                <Nav.Link className="link" as={Link} to="/Order">Orders</Nav.Link>
                <Nav.Link className="link" as={Link} to="/ManageOrders">Manage Orders</Nav.Link>
                <Nav.Link className="link" as={Link} to="/AddService">Add Service</Nav.Link>
                <Navbar.Text>
                    <h5 className="px-3 mt-2">{user?.displayName}</h5>
                </Navbar.Text>
                {user.email? (
                    <Button className="btn btn-outline-success" onClick={logOut}>Logout</Button>
                ) : (
                <Button className="btn btn-outline-success" as={Link} to="/login">LOGIN</Button> ) }
            </Navbar.Collapse>
           
    </Navbar>
</div>
  );
};

export default Header;