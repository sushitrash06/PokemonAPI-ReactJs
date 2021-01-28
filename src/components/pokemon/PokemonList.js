import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import Loading from '../layout/Loading';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

export default class PokemonList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20',
    pokemon:[],
    itemsCountPerPage: 20,
    activePage:1
  };
  loadPokemon =()=>{
    axios
      .get(this.state.url)
      .then(res=>{
        this.setState(prevState =>{
          const pokemon = prevState.pokemon;
          return{
            pokemon: [...prevState.pokemon, ...res.data.results],
            url: res.data.next
          };
        });
      }).catch(function(error){
        console.log(error)
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadPokemon}
              hasMore={this.state.url}
              loader={
                <div className='loader' key={0}>
                  Load Data.....
                </div>
              }
            >
            <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
            </div>
            </InfiniteScroll>
          
        ) : (
          <Loading />
        )}
      </React.Fragment>
    );
  }
}
