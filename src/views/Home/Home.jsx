import React, { useEffect } from 'react';
import { useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { getAffiliation, getCharacters } from '../../services/characters';
import './Home.css';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
      console.log(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAffiliation();
      setAffiliation(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div>
      <CharacterList characters={characters} affiliation={affiliation} />
    </div>
  );
}
