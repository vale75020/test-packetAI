import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    player: "X",
    winner: false,
    tab: Array(9).fill(""),
  };

  play = (event) => {
    // console.log("it works");
    if (this.state.winner === false) {
      if(this.state.tab[event.target.dataset.id] === ""){
        event.target.innerText = this.state.player;
      this.state.tab[event.target.dataset.id] = this.state.player;
      this.setState({
        player: this.state.player === "X" ? "O" : "X"
      });
    }
  };
}

start = ()=>{
  window.location.reload()
}

  render() {
    return (
      <div className="App">
        <h1>TIC TAC TOE</h1>
        <div>
          {this.state.winner ? (
            <h3>Winner : {this.state.player}</h3>
          ) : (
            <h3>Next Player: {this.state.player}</h3>
          )}
        </div>
        <div className="container" onClick={this.play}>
          <div className="square" data-id="0" value="" />
          <div className="square" data-id="1" value="" />
          <div className="square" data-id="2" value="" />

          <div className="square" data-id="3" value="" />
          <div className="square" data-id="4" value="" />
          <div className="square" data-id="5" value="" />

          <div className="square" data-id="6" value="" />
          <div className="square" data-id="7" value="" />
          <div className="square" data-id="8" value="" />
        </div>
        <button onClick={this.start}>START</button>
      </div>
    );
  }
  }
