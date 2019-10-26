import React, { Component } from "react";
import contacts from "./contacts.json";
import ActorTable from "./components/ActorTable";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     actors: contacts.slice(0, 5)
  //   };
  // }

  state = {
    actors: contacts.slice(0, 5)
  };

  listOfActors = () => {
    return this.state.actors.map((actor, i) => {
      return (
        <Card key={i} actor={actor} index={i} deleteActor={this.deleteActor} />
      );
    });
  };

  onClickHandler = () => {
    const filtered = contacts.filter(
      actor => this.state.actors.indexOf(actor) < 0
    );
    const newActor = filtered[Math.floor(Math.random() * filtered.length)];
    const actorsArray = [...this.state.actors];
    actorsArray.push(newActor);
    this.setState({ actors: actorsArray });
  };

  onClickSort = (sortBy, sortType) => {
    const actorsArray = [...this.state.actors];
    if (sortType === "alph") {
      actorsArray.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    } else {
      actorsArray.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    this.setState({ actors: actorsArray });
  };

  deleteActor = index => {
    const actorsArray = [...this.state.actors];
    actorsArray.splice(index, 1);
    this.setState({ actors: actorsArray });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div class="buttonrow">
          <button onClick={this.onClickHandler}>Add Random Contact</button>
          <button onClick={() => this.onClickSort("name", "alph")}>
            Sort by name
          </button>
          <button onClick={() => this.onClickSort("popularity", "num")}>
            Sort by popularity
          </button>
        </div>
        <ActorTable>{this.listOfActors()}</ActorTable>
      </div>
    );
  }
}

export default App;
