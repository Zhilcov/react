import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render(){
        return(
            <Navbar expand="lg" variant="light" bg="light" className="justify-content-end">
                <Link className="nav-link" to="/"> На главную </Link>
                <Link className="nav-link" to="/stats"> Статистика </Link> 
            </Navbar>
        )
    }
}
export default Header