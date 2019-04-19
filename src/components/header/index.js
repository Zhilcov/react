import React from 'react';
import {Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap"
import { Link } from 'react-router-dom';
import history from "../../index"
import checkAdmin from "../../checkAdmin"

class Header extends React.Component {
    render(){
        return(
            <Navbar expand="lg" variant="light" bg="light" className="justify-content-end">
                <Link className="nav-link" to="/"> Добавление фигур </Link> 
                <Link className="nav-link" to="/stats"> Статистика </Link>
                <Nav.Item>
                    <DropdownButton
                        title={"Привет " + localStorage.getItem("username") }
                    >
                        {
                            checkAdmin() ?  <Dropdown.Item onClick={()=>{
                                                history.push('/user/admin/'+localStorage.getItem("username"))
                                            }}> 
                                            Управление
                                        
                                            </Dropdown.Item> :
                                            ""
                        }
                       
                        <Dropdown.Item onClick={()=>{
                                            history.push('/user/'+localStorage.getItem("username"))
                                        }}> 
                                         Мои фигуры
                        </Dropdown.Item>
                       <Dropdown.Item onClick={()=>{
                                            history.push('/user/stats/'+localStorage.getItem("username"))
                                        }}> 
                                         Моя статистика
                                     
                        </Dropdown.Item> 
                        <Dropdown.Item onClick={()=>{
                                        localStorage.clear();
                                         history.push('/')
                                        }}> 
                                     Выход
                        </Dropdown.Item>
                    
                    </DropdownButton>
                </Nav.Item>
            </Navbar>
        )
    }
}
export default Header