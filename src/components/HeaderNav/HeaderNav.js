import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import svgExit from '../../images/exit-icon.svg';
import style from './HeaderNav.module.css';

export default function HeaderNav() {
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <svg version="1.1"  viewBox="0 0 32 32" className={style.logo__svg}>
          <title>wallet</title>
          <path fill="#24cca7" d="M3.755 7.619l16.211-4.538-0.858-1.779c-0.562-1.156-1.931-1.634-3.059-1.058l-14.513 7.375h2.219zM24.814 3.048c-0.209 0-0.411 0.032-0.601 0.091l0.014-0.004-15.012 4.483h18.43l-0.692-2.778c-0.266-1.083-1.163-1.792-2.14-1.792z"></path>
          <path fill="#4a56e2" d="M28.36 8.573h-26.56c-0.001 0-0.002 0-0.003 0-0.822 0-1.515 0.551-1.73 1.303l-0.003 0.013c-0.039 0.14-0.063 0.3-0.064 0.466v19.863c0.005 0.985 0.804 1.782 1.79 1.782 0.002 0 0.004 0 0.007 0h26.56c0.991 0 1.796-0.798 1.796-1.782v-4.974h-10.662c-1.686 0-3.054-1.358-3.054-3.030v-3.966c0-0.82 0.33-1.565 0.866-2.11 0.551-0.565 1.321-0.916 2.172-0.916 0.005 0 0.009 0 0.014 0h10.665v-4.867c-0.001-0.985-0.8-1.782-1.785-1.782-0.003 0-0.006 0-0.008 0h0z"></path>
          <path fill="#4a56e2" d="M31.414 16.926c-0.318-0.29-0.743-0.467-1.209-0.467-0.001 0-0.001 0-0.002 0h-10.712c-0.992 0-1.797 0.798-1.797 1.782v3.969c0.005 0.985 0.804 1.782 1.79 1.782 0.002 0 0.005 0 0.007 0h10.712c0.205 0 0.399-0.036 0.582-0.096 0.237-0.079 0.449-0.208 0.629-0.371 0.359-0.325 0.586-0.795 0.586-1.316v-3.968c0-0.52-0.226-0.991-0.586-1.315zM23.242 20.581c0 0.492-0.402 0.891-0.898 0.891h-0.596c-0.496 0-0.898-0.4-0.898-0.891v-0.592c0-0.286 0.133-0.538 0.345-0.698 0.151-0.119 0.344-0.191 0.553-0.193h0.596c0.496 0 0.898 0.399 0.898 0.891v0.592z"></path>
        </svg>

        <span className={style.logo}>Wallet</span>

        <div className={style.author}>
          <span className={style.name}>{name}</span>

          <div className={style.line}></div>

          <NavLink to="/logout" className={style.button}>
            <ReactSVG className={style.output__svg} src={svgExit} />
            <span className={style.output}>Выйти</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
