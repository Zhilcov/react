import React from "react";
import FigureItem from "../FigureItem"
import './info.css';
import Pagination from 'react-paginate';
class Info extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hideName: true,
            hideValue: true,
            hideId: false,
            activePage: 1

        };
        this.handleChange = this.handleChange.bind(this);  
        this.handlePageChange = this.handlePageChange.bind(this);  
    }

    componentDidMount() {
        this.props.actions.getFigures(`http://localhost:3003/`)
    }
    componentDidUpdate(prevProps) {
        if(this.props.wasUpdated !== prevProps.wasUpdated) {
            this.props.actions.getFigures(`http://localhost:3003/`)
        }
    }
    handlePageChange(pageNumber) {
        var page = pageNumber.selected + 1
        console.log(page);
        this.setState({activePage: page});
    }
    handleChange(e){
        var id = e.target.id;        
        switch (id) {
            case "id":
                this.setState({hideName: true, hideValue: true, hideId : false});
                break;
            case "value":
                this.setState({hideName: true, hideId: true, hideValue:false});
                break;
            case "name":
                this.setState({hideValue: true, hideId: true,hideName :false});
                break;
            default:
                break;
        }
    }

    render(){    
        const {figures, actions , value , lable, id} = this.props        
        const perPage = 5;
        const pages = Math.ceil(figures.info.length / perPage)  
        const currentPage = this.state.activePage
        const startOffset = (currentPage - 1) * perPage;    
        let startCount = 0;                                                                     
        return(
            <div className ="col col-md-12">
                    <h1 className ="info">Информация</h1>
                    
                    <table id="grid" className="table">
                        <thead className="thead-light">
                        <tr>
                            <th id ="id" onClick = { (e) =>{
                                this.handleChange(e)
                                actions.sort(id)
                            } } scope="col">#  {this.state.hideId ? " " :  id ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
                            <th id ="value" onClick = {(e) => {
                                this.handleChange(e)
                                actions.sortByValue(value )
                            }} scope="col">Площадь { this.state.hideValue ? " " :  value ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
                            <th id ="name" onClick = { (e) => {
                                this.handleChange(e)
                                actions.sortByName(lable)
                            }} scope="col">Фигура {this.state.hideName ? " " : lable ? <i className="fas fa-chevron-down"></i>  : <i className="fas fa-chevron-up"></i>}</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {    
                            figures.info.map((figureItem,index) =>{
                                if(index >= startOffset && startCount < perPage ){
                                    startCount++;
                                    return(
                                        <FigureItem key={figureItem.id} figure={figureItem} {...actions}/>
                                    )
                                }
                            }
                            )
                            
                        } 
                        </tbody>
                    </table>
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

  
export default Info