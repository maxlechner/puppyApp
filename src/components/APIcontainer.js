import React, { Component } from "react";
import API from "../utils/API";

class APIcontainer extends Component {
    state = {
      result: {},
      friendCounter: 0,

    };
  
    componentDidMount() {
        this.randomDog();
    }

    randomDog = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data.message }))
        .catch(err => console.log(err));
    };

    likeButton = (event) => {

        event.preventDefault();
        let value = this.state.friendCounter;
        const randomNumber = Math.floor(Math.random()*5+1);

        if (randomNumber === 1) {
            value = value++;
            this.setState ({ friendCounter: value, });
            alert("You got a buddy!")
        } else{
            alert("this dog is not your dog, dog")
        }

        this.randomDog(this.state.result);
    };

    dislikeButton = event => {

        this.randomDog(this.state.result);

    }
    
    
    render() {
      return (
        <div>
            <img
                src={this.state.result}
            />

            <button onClick={this.likeButton} type="button" className="btn btn-success">You like the pup</button>
            <button onClick={this.dislikeButton} type="button" className="btn btn-warning">You don't like the pup</button>
            <p>
                Congrats you have {this.state.friendCounter} friend(s)!
            </p>
        </div>
      );
    }
  }

export default APIcontainer;