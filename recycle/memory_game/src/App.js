import React from 'react';
import CharacterContainer from './components/CharacterContainer';

/* import './App.css'; */

class App extends React.Component {

  state = {
    goodAnswer: true,
    score: 0,
    topScore: 0,
    gameGuesses: []
  };

  /* handleClick = () => {

  } */

  render () {
    return (
      <div className = "Container-fluid">
        <div className = "Scorebar">
          <div>Score: {this.state.score}</div>
          <div>Top Score: {this.state.topScore}</div>
        </div>
        <CharacterContainer />
      </div>
    )
  }
}

export default App;