import React from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import { getAffiliation } from '../../services/characters';

export default function Nation() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  const { nation } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await setCharacters(nation);
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}
