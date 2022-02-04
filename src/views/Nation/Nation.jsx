import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { getAffiliation } from '../../services/characters';
import { useParams } from 'react-router-dom';

export default function Nation() {
  const [affiliation, setAffiliation] = useState([]);
  const [loading, setLoading] = useState(true);

  const { nation } = useParams();
  console.log(nation);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAffiliation(nation);
      setAffiliation(data);
      setLoading(false);
      console.log(data);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, nation]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <CharacterList characters={affiliation} nation={nation} />
    </div>
  );
}
