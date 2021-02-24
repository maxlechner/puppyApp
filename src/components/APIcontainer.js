import React, { Component } from "react";
import API from "../utils/API";

class APIcontainer extends Component {
    state = {
      result: {},
    };
  
    componentDidMount() {
        this.randomDog();
    }

    randomDog = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data.message }))
        .catch(err => console.log(err));
    };
    
    render() {
      return (
        <img
            src={this.state.result}
        />
       
      );
    }
  }

export default APIcontainer;