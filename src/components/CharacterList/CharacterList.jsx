import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterList.css';

const { characterList, listItems, links } = styles;

export default function CharacterList({ characters }) {
  return (
    <>
      <ul className={characterList}>
        {characters.map(({ _id, name, photoUrl }) => (
          <li key={_id} className={listItems}>
            <Link key={_id} className={links} to={`/character/${_id}`}>
              <h1>{name}</h1>
              <img src={photoUrl} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
