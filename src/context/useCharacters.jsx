import { useState, useEffect } from 'react';
import { getCharacters, getAffiliation } from '../services/characters';
import { useParams } from 'react-router-dom';

export function useCharacters() {
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

  return { allCharacters, loading };
}
