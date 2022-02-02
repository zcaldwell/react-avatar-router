import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css';

export default function CharacterList({ characters }) {
  console.log(characters);
  return (
    <ul className="manga-list">
      {characters.map(({ _id, name, photoUrl }) => (
        <Link key={_id} to={`/character/${_id}`}>
          <li key={_id}>
            <h1>{name}</h1>
            <img src={photoUrl} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
