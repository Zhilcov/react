import React from "react"
import Password from "./password"
import UserName from "./username"

class settingsPage extends React.Component {
    constructor(props){
        super(props)

    }
    render(){        
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-8">
                            <UserName {...this.props}/>
                            <Password {...this.props}/>
                    </div>
                    <div className="col col-md-4">
                            Сайтбар
                    </div>
                </div>
            </div>
        )
    }
}

export default settingsPage