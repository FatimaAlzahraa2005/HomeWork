import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.Plus = this.Plus.bind(this);
    this.Minus = this.Minus.bind(this);
    this.Clear = this.Clear.bind(this);


  }
  Plus() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  Minus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  Clear() {
    this.setState(prevState => {
      return { count: prevState.count = 0 }
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 >{this.state.count}</h1>

        <button className="App" onClick={this.Plus} >increase</button>
        <br />
        <button onClick={this.Minus} className="App">decrease</button>
        <br />
        <button onClick={this.Clear} className="App clear">clear</button>
      </div>
    );
  }
}

export default App;
