import React from 'react';

const Pokemon = ({ pokemon, id }) => {
  return (
    <div className='pa3 ma3 ba w-75 center'>
      <img alt='pokemon' src= {`https://robohash.org/${id}?set=set4`} />
      <h1 className='lh-copy'>
        Name: {pokemon.name} <br />
        Weight: {pokemon.weight} <br />
        Height: {pokemon.height}
      </h1>
    </div>
  );
}

export default Pokemon;