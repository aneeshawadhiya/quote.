import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
// import { CgClose } from 'react-icons/cg';
// import Typography from '../fonts/Typography';

const NavMenuStyles = styled.div`
  height:8rem;

  *{
    text-decoration:none;
    font-family: 'Nexa Regular';
    font-size: 1rem;
    color:white;
    text-align:center;
  }

  padding: 0;
    .hide-item {
      transform: translateY(calc(-180%));
    }

    .mobile-menu-icon {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:white;
        max-width:100%;
        padding:1.25rem;

        h1{
          cursor: pointer;
          font-size:1.7rem;
        }
    }

    .navItems {
      z-index:10;

      --top: 6rem;
      transition: 0.3s ease transform;
      background: #272727;
      padding: 1rem 2rem;
      max-width: 220px;
      border-radius: 6px;
      position: absolute;
      top: var(--top);
      left:50%;
      margin-left:-60px;

      li {
        display: block;
        margin-top:1rem;
      }
    }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-160%));
    }

    .active {
      color: #f7f7f7;
    }

    .mobile-menu-icon {
      display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        max-width:100%;
        padding:1.25rem;

        h1{
          cursor: pointer;
          font-size:1.7rem;
        }
    }

    .navItems {
      z-index:10;
      --top: 6rem;
      transition: 0.3s ease transform;
      background: #272727;
      padding: 1rem 2rem;
      max-width: 220px;
      border-radius: 6px;
      position: absolute;
      top: var(--top);
      left:50%;
      margin-left:-60px;

      li {
        display: block;
        margin-top:1rem;
      }
    }

      li {
        display: block;
        margin-bottom: 1rem;
      }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        
      >
        <h1
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
        >quote.</h1>
        <FiChevronDown />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>


      <li>
          <NavLink
            to="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            home
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/explore"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            explore
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/theme"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            theme
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            about
          </NavLink>
        </li>

      </ul>
    </NavMenuStyles>
  );
}
