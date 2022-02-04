import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

const { navLinks, header } = styles;

export default function Nav() {
  return (
    <div className={header}>
      <h1>Avatar: The Last Airbender</h1>
      <h3>Nations</h3>
      <div className={navLinks}>
        <NavLink to="/all">All</NavLink>
        <NavLink to="/fire">Fire</NavLink>
        <NavLink to="/air">Air</NavLink>
        <NavLink to="/water">Water</NavLink>
        <NavLink to="/earth">Earth</NavLink>
      </div>
    </div>
  );
}
