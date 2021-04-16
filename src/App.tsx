import React from 'react';
import ItemCard from 'components/ItemCard';
import PokemonCard from 'components/PokemonCard';

function App() {
  return (
    <div>
      <PokemonCard id={1} />
      <ItemCard id={1} />
    </div>
  );
}

export default App;
