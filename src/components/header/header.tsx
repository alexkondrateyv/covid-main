import React from 'react';

import './header.scss';

import { useActions } from '../../hooks/useAction';

import logo from '../../images/logo.png';
import search from '../../images/search.svg';

export const Header: React.FC = () => {
  const { updateSearch } = useActions()

  return (
    <header className='header'>
      <div className="header__logo">
        <img src={logo} alt="logo" className='header__logo-img' />
        <h1 className='header__logo-head'>Statistic</h1>
      </div>
      <form className="header__search">
        <input
          type="text"
          placeholder="Search..."
          className="header__search-input"
          onChange={(event) => {
            updateSearch(event.target.value)
          }}
        />
        <img src={search} alt="search" className="header__search-img" />
      </form>
    </header>
  )
}