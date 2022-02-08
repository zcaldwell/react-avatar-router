import React from 'react';

import CharacterList from '../../components/CharacterList/CharacterList';
import { useCharacters } from '../../context/useCharacters';

import './Home.css';

export default function Home() {
  const { allCharacters, loading } = useCharacters();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <CharacterList characters={allCharacters} />
    </div>
  );
}
