import React from 'react';

class PokemonForm extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      name: "",
      attack: 0,
      defense: 0,
      poke_type: "normal",
      move1: "",
      move2: "",
      image_url: "http://vignette3.wikia.nocookie.net/pokepals/images/4/4c/Pokeball.png/revision/latest?cb=20091117163128"
    };
    this.update = this.update.bind(this);
    this.addPokemon = this.addPokemon.bind(this);

    this.types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  addPokemon(e) {
    e.preventDefault();
    const newPokemon = {
      name: this.state.name,
      attack: this.state.attack,
      defense: this.state.defense,
      poke_type: this.state.poke_type,
      moves: this.createMoveList(),
      image_url: this.state.image_url
    };
    this.props.createPokemon(newPokemon);
  }

  createMoveList() {
    const moveList = [];
    if (this.state.move1 !== "") {
      moveList.push(this.state.move1);
    }
    if (this.state.move2 !== "") {
      moveList.push(this.state.move2);
    }

    return moveList;
  }

  render () {
    return (

      <div className="poke-form">
          <ul className="error">
            {
             this.props.errors.map((error) => {
                return <li className="error">{error}</li>;
                })
              }
            </ul>
        <label>Name</label>
          <input type="text" value={this.state.name} onChange={this.update("name")}></input>
      <br/>
          <label>Attack</label>
            <input type="number" value={this.state.attack} onChange={this.update("attack")}></input>
        <br/>
          <label>Defense</label>
            <input type="number" value={this.state.defense} onChange={this.update("defense")}></input>
        <br/>
          <label>Type:</label>
            <select onChange={this.update("type")}>
              {
                this.types.map((type) => {
                  return <option value={type}>{type}</option>;
                })
              }
            </select>
          <br/>
            <label>First Move</label>
              <input type="text" value={this.state.move1} onChange={this.update("move1")}></input>
          <br/>
            <label>Second Move</label>
              <input type="text" value={this.state.move2} onChange={this.update("move2")}></input>
          <br/>
            <label>Poke-Picture</label>
              <input type="text" value={this.state.image_url} onChange={this.update("image_url")}></input>
          <br/>
          <button onClick={this.addPokemon}>Add Poketman</button>
      </div>
    );
  }
}

export default PokemonForm;
