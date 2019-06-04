import React, {Component} from 'react';


class CharacterContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Click on a New Image</Title>
        {this.state.friends.map(friend => (
          <Cards
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
} 

export default CharacterContainer;
