import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Pokemon from './Pokemon';

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: [],
      id: ''
    }
  }  

loadPage = () => {
  const randomNum = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(500);
    return Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  }
  let random = randomNum();
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
  .then(resp => resp.json())
  .then(poke => this.setState({ pokemon: poke, id: random }));
}

componentDidMount() {
  this.loadPage();
}
 
  render() {
    const { pokemon, id } = this.state;
    return(
    <div className="tc pa5">
      <h1>Pokemon, Gotta Catch em' all!</h1>
      <Button go={this.loadPage}/>
      <Pokemon pokemon={pokemon} id={id}/>
    </div>
  )
  };
}

  

export default App;
