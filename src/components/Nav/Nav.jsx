import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink to="/all">All</NavLink>
      <NavLink to="/fire">Fire</NavLink>
      <NavLink to="/air">Air</NavLink>
      <NavLink to="/water">Water</NavLink>
      <NavLink to="/earth">Earth</NavLink>
    </div>
  );
}
