import React from 'react'
import {Button, Modal} from "react-bootstrap"
class UserItem extends React.Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          smShow: false
        };

        this.smShow = this.smShow.bind(this);
      }
    smShow() {
        this.setState({ smShow: true })
    }
   
    render() {
        let smClose = () => this.setState({ smShow: false });
        const { user , deleteUser,setAdmin,index } = this.props;          
        return (
            <tr>
                  <th scope="row">{index+1}</th>
                  <th scope="row">{user.username}</th>
                  <td className="text-center"><i className="fas fa-crown" onClick = {()=>setAdmin(`http://localhost:3003/setAdmin/${user._id}`)}></i></td>
                  <td className="text-center"><i className="fas fa-trash-alt" onClick = {this.smShow}  ></i></td>
                     
                    <Modal
                        size="sm"
                        show={this.state.smShow}
                        onHide={smClose}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Удалить пользователя?
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button className =  "btn btn-danger" onClick={()=>{deleteUser(`http://localhost:3003/delUser/${user._id}`)
                    smClose()
                    }}>Удалить</Button>
                   </Modal.Body>
                    </Modal>  
            </tr>
        );
    }
}
export default UserItem