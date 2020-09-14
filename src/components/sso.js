import axios from "axios";
import React from "react";
class SSO extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  result: "",error : "" };
    }
componentDidMount() {
  this.sso();
}
    sso() {
        axios
          .get("http://localhost:8000/", {withCredentials : true})
          .then(response => {
              console.log(response);
              
            this.setState({
              result: response.data.username ,
              error: ""
            });
          })
          .catch(error => {
            if (error.response) {
              this.setState({ error: error.response.data.message, result: "" });
            } else {
              this.setState({ error: error.message, result: "" });
            }
          });
    }
    
    render() {
        return (
            <div className="text">
        {this.state.result
          ? this.state.result
          : null}
            </div>
        );
    }
}
export default SSO;
