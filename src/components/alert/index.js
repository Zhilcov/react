import React from "react"
import {Alert , Button } from "react-bootstrap"

class AlertDismissible extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { show: true };
      this.handleHide = this.handleHide.bind(this);
    }
    
    handleHide(){
      this.setState({ show: false })
    }

    render() {
      
      return (
        <>
          <Alert show={this.state.show} variant="danger">
          Треугольник не существует
            <div className="d-flex justify-content-end">
              <Button onClick={() => { 
                this.props.isset(true)
                this.handleHide()
              }} variant="outline-danger">Понятно</Button>
            </div>
          </Alert>
        </>
      );
    }
  }

  export default AlertDismissible