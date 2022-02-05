import React, { useEffect } from 'react';
import { useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { getCharacters, getAffiliation } from '../../services/characters';
import './Home.css';
import { useParams } from 'react-router-dom';

export default function Home() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const { nation } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (nation === 'all') {
        const data = await getCharacters();
        setAllCharacters(data);
        setLoading(false);
      } else if (nation !== 'all') {
        setLoading(true);
        const data = await getAffiliation(nation);
        setAllCharacters(data);
        setLoading(false);
      }
    };

    fetchData();
  }, [nation]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <CharacterList characters={allCharacters} />
    </div>
  );
}
