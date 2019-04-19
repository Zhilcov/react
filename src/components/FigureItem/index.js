import React from 'react'
import {Button, Modal} from "react-bootstrap"
import { Link}  from 'react-router-dom';
import checkAdmin from "../../checkAdmin"
class FigureItem extends React.Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          smShow: false,
          showRecylce: true
        };
        this.smShow = this.smShow.bind(this);
      }
    smShow() {
        this.setState({ smShow: true })
    }
   
    render() {
        let smClose = () => this.setState({ smShow: false });
        const { figure , deleteFigure, hideRecycle} = this.props;         
        return (
            <tr>
                <th scope="row">{figure.id}</th>
                <td>{figure.value}</td>
                <td>{figure.label}</td>
                <td>{(figure.ownUser===localStorage.getItem("id") && figure.recycle) || checkAdmin()  ? <Link to ={{ pathname: `/${figure.label}`, search: `?id=${figure.id}&a=${figure.sides}` }}><i  onClick = {()=>{
                    hideRecycle(`http://localhost:3003/hideRecycle/${figure.id}`);
                }} className="fas fa-edit"></i></Link> : ''}</td>
                <td>{(figure.ownUser===localStorage.getItem("id") && figure.recycle) || checkAdmin()  ? <i className="fas fa-trash-alt" onClick = {this.smShow}  ></i>  : ''}</td>
                    
                    <Modal
                        size="sm"
                        show={this.state.smShow}
                        onHide={smClose}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Удалить?
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button className =  "btn btn-danger" onClick={()=>{deleteFigure(`http://localhost:3003/delFigure/${figure.id}`)}}>Удалить</Button>
                   </Modal.Body>
                    </Modal>  
            </tr>
        );
    }
}
export default FigureItem