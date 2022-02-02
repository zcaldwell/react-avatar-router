import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters } from '../../services/characters';

export default function MangaDetail() {
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMangaById(characterId);
      setSelected(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{title.en}</h1>
      <p>{description.en}</p>
      <img
        src={`https://upload.mangadex.org/covers/${mangaId}/${relationship}`}
      />
    </div>
  );
}
