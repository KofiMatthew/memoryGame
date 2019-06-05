import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Scores from "./components/Scores";
import characters from "./characters.js";




class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score: 0,
    topScore: 0,
    guesses: [],
  };

  shufflecharacters = () => {
    const shuffle = require('shuffle-array');
    let rearranged = shuffle(characters)
    this.setState({ characters: rearranged });
  };

  gameOver = () => {
    this.setState({score: 0});
    this.setState({guesses: [] });
  }

  game = (id) => {
    const array = this.state.guesses;
    if (array.includes(id)) {
      alert("Game Over.  Try again!")
      this.gameOver()
    } else {
      array.push(id);
      this.setState({guesses: array});
      console.log(this.state.guesses);

      let newScore = this.state.guesses.length*3;
      this.setState({score: newScore});

      if (newScore > this.state.topScore){
        this.setState({topScore: newScore})
      }
    }
  };
  handleClick = (id) => {    
    this.shufflecharacters();    
    this.game(id);
  };  

  // Map over this.state.characters and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Test Your Memory! No Repeats!</Title>
        <div className="row">
          <Scores 
            score = {this.state.score}
            topScore = {this.state.topScore}
          />
        </div>
        <div className="row">
          {this.state.characters.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              clicked={this.handleClick}
            />
          ))}
        </div>
        
      </Wrapper>
    );
  }
}

export default App;
