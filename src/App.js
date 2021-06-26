import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    const id = Math.floor(Math.random() * 100) - 1;
    axios
      .get(`https://api.adviceslip.com/advice/${id}`)
      .then((response) => {
        const data = JSON.parse(response.data + "}");
        const { advice } = data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  call = () => {
    console.log("OK");
  };

  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="app">
          <div className="card">
            <h2 className="heading">{advice}</h2>

            <button onClick={this.fetchAdvice} className="button">
              <span>Get Another</span>
            </button>
          </div>
        </div>
        <div className="footer">
          <p>Written in react By Aman Raj</p>
        </div>
      </>
    );
  }
}
export default App;
