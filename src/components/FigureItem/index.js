import React from 'react'
import {Button, Modal} from "react-bootstrap"
import { Link}  from 'react-router-dom';

class FigureItem extends React.Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          smShow: false
        };
      }
    render() {
        let smClose = () => this.setState({ smShow: false });
        const { figure , deleteFigure } = this.props;     
        
        return (
            <tr>
                <th scope="row">{figure.id}</th>
                <td>{figure.value}</td>
                <td>{figure.label}</td>
                <td><Link to ={{ pathname: `/${figure.label}`, search: `?id=${figure.id}` }}><i className="fas fa-edit"></i></Link></td>
                <td><i className="fas fa-trash-alt"  onClick={() => {
                    this.setState({ smShow: true })
                    }}></i></td>
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
                        <Button className =  "btn btn-danger" onClick={()=>{deleteFigure(figure.id)}}>Удалить</Button>
                   </Modal.Body>
                    </Modal>  
            </tr>
        );
    }
}
export default FigureItem