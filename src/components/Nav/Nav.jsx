import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to="/chracter/fire">Fire</Link>
      <Link to="/character/air">Air</Link>
      <Link to="/character/water">Water</Link>
      <Link to="/character/earth">Earth</Link>
    </div>
  );
}
