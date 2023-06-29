import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon } from 'react-materialize'

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      {/* <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li><Link to={'/'} className='active'>Home</Link></li>
          <li><Link to={'/news'}>News</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <div className='switch'>
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
      </nav> */}
      <Navbar className='menu'
        alignLinks='right'
        brand={<span className='brand-logo'>Player Cards</span>}
        id='mobile-nav'
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}>
        <ul>
          <li><Link to={'/'}><Icon left>home</Icon>Home</Link></li>
          <li><Link to={'/about'}><Icon left>info_outline</Icon>About</Link></li>
          <li><Link to={'/news'}><Icon left>dvr</Icon>News</Link></li>
          <li><Link to={'/contact'}><Icon left>contacts</Icon>Contact</Link></li>
        </ul>
      </Navbar>
    </div>
  )
}

