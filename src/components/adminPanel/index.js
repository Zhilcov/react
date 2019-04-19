import React from "react"
import {Table} from "react-bootstrap"
import UserTableItem from "../userTableItem"
class AdminPanel extends React.Component{


    componentDidMount(){
        this.props.getUsers("http://localhost:3003/getUsers")
    }
    componentDidUpdate(prevProps) {
        if(this.props.wasUpdated !== prevProps.wasUpdated) {            
            this.props.getUsers("http://localhost:3003/getUsers") 
        }
    }
    render(){
         var users = this.props.users
        const {deleteUser,setAdmin} = this.props
        return(
            <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                            users.map((user,index)=>{
                            return(<UserTableItem key ={index} 
                                                        user = {user} 
                                                        index = {index} 
                                                        deleteUser = {deleteUser}
                                                        setAdmin = {setAdmin} />)
                        })
                    }
                </tbody>
                </Table>
            </div>
        )
    }
}
export default AdminPanel