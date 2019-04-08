import React from "react"
import {Alert , Button } from "react-bootstrap"

class AlertDismissible extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { show: true };
    }
  
    render() {
      const handleHide = () => {
          this.setState({ show: false })          
        };
      return (
        <>
          <Alert show={this.state.show} variant="danger">
          Треугольник не существует
            <div className="d-flex justify-content-end">
              <Button onClick={handleHide} variant="outline-danger">Понятно</Button>
            </div>
          </Alert>
        </>
      );
    }
  }

  export default AlertDismissible