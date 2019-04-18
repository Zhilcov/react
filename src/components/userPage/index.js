import React from "react"
import Header from "../header"
import Info from "../../container/info"
import {Route,Switch,Redirect} from "react-router-dom"
import Statistics from '../../container/stats'
class UserPage extends React.Component {
    render(){
        return(
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path ="/user/:name" component = {Info}/>
                    <Route path ="/user/stats/:name" component = {Statistics}/>  
                    <Redirect to = "/"/>
                </Switch>
                       
            </div>
        )
    }
}

export default UserPage