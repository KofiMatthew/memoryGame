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

  



  handleClick = () => {
/*     const shufflecharacters = () => {
      const shuffle = require('shuffle-array');
      let rearranged = shuffle(characters)
      this.setState({ characters: rearranged });
    };
    shufflecharacters(); */

    const game = () => {
      const id = this.value;
      console.log(id);
      const array = this.state.guesses;
      if (array.includes(id)) {
        console.log('Game over')
      } else {
        array.push(id);
        this.setState({guesses: array})
        console.log(this.state.guesses)
      }
    };
    game()
    
    /* const scoreCalc = () => {
      const newScore = this.state.guesses.lenth*3;
      console.log(newscore);

    } 
    scoreCalc();
 */
  };
  
  

  

  // Map over this.state.characters and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Test Your Memory! No Repeats!</Title>

        {this.state.characters.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
