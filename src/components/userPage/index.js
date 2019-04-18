import React from "react"
import Header from "../header"
import Info from "../../container/info"
class UserPage extends React.Component {
    /* construstor(props){
        super(props)

        this.state = {

        }
    } */

    render(){
        return(
            <div className="container">
                <Header/>
                <Info/>
            </div>
        )
    }
}

export default UserPage