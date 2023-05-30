import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li><Link to={'/'} className='active'>Home</Link></li>
          <li><Link to={'/news'}>News</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <div className='switch'>
          {/*eslint-disable-next-line */}
          <a className='switch-mode' href='#' onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none',
            }} data-testid='toggle-theme-btn'
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  )
}

