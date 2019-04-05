import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
class Header extends React.Component {
    render(){
        return(
            <Navbar expand="lg" variant="light" bg="light" className="justify-content-end">
             <Nav.Link  href="/">На главную</Nav.Link>
             <Nav.Link  href="/stats">Статистика</Nav.Link>
            </Navbar>
        )
    }
}
export default Header