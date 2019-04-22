import React from "react"
import {Table} from "react-bootstrap"
import UserTableItem from "../userTableItem"
import Pagination from 'react-paginate';

class AdminPanel extends React.Component{
 
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }; 
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        var page = pageNumber.selected + 1
        this.setState({activePage: page});
    }

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
        const perPage = 5;
        const pages = Math.ceil(users.length / perPage)  
        const currentPage = this.state.activePage
        const startOffset = (currentPage - 1) * perPage;    
        let startCount = 0;
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
                            if(index >= startOffset && startCount < perPage ){
                                startCount++;
                                    return(
                                    <UserTableItem 
                                        key ={index} 
                                        user = {user} 
                                        index = {index} 
                                        deleteUser = {deleteUser}
                                        setAdmin = {setAdmin} />
                                    )
                            }
                        })
                    }
                </tbody>
                </Table>
                <Pagination
                        previousLabel={<i className="fas fa-arrow-left"></i>}
                        previousClassName = {'page-item'}
                        previousLinkClassName={'page-link'}
                        nextLabel={<i className="fas fa-arrow-right"></i>}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageChange}
                        containerClassName={'pagination justify-content-center'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        pageClassName={'page-item'}
                        pageLinkClassName={"page-link"}
                        />
            </div>
        )
    }
}
export default AdminPanel