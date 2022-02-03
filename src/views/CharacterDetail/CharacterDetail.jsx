import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/characters';

export default function CharacterDetail() {
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacterById(characterId);
      setSelected(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  const { photoUrl, name, affiliation, position } = selected;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{affiliation}</h3>
      <h4>{position}</h4>
      <img src={photoUrl} />
    </div>
  );
}
