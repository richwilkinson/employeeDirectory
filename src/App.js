import React, { Component } from "react";
import FightCard from "./components/FightCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import Query from './components/Query';
 
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: employees,
    filter: ""
  };
  handleReset = () => {
    Array.from(document.querySelectorAll('input'));
    this.setState({
      friends: ({employees})
    });
  };
  setFilter = (Query) => {
    this.setState({ filter: Query});
  }
  byName = (filter) => {
    const filterByName = this.state.friends.filter(friend => friend.name === filter);
    this.setState({ friends: filterByName });
  }
  
  /*removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friendsFilteredArray = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friendsFilteredArray });
  };*/

  // Map over this.state.friends and render a FightCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Fight Club Night Club</Title>
        <Query setFilter={this.setFilter} byName={this.byName} filter={this.state.filter} />
        {this.state.friends.map(friends => (
          <FightCard
            removeFriend={this.removeFriend}
            id={friends.id}
            key={friends.id}
            name={friends.name}
            image={friends.image}
            occupation={friends.occupation}
            gym={friends.gym}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
