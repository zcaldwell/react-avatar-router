import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css';

export default function CharacterList({ characters }) {
  console.log(characters);
  return (
    <>
      <h1>Avatar: The Last Airbender Characters</h1>
      <ul className="character-list">
        {characters.map(({ _id, name, photoUrl }) => (
          <li key={_id}>
            <Link key={_id} to={`/character/${_id}`}>
              <h1>{name}</h1>
              <img src={photoUrl} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
