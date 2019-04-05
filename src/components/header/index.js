import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render(){
        return(
            <Navbar expand="lg" variant="light" bg="light" className="justify-content-end">
             <Nav.Link><Link to="/"> На главную </Link> </Nav.Link>
             <Nav.Link><Link to="/stats"> Статистика </Link> </Nav.Link>
            </Navbar>
            
        )
    }
}
export default Header