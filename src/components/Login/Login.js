import Styles from './Login.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { alert, defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 1000;

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    try {
      e.preventDefault();
      dispatch(authOperations.login({ email, password }));
      setEmail('');
      setPassword('');
    } catch (error) {
      alert({
        text: error[0].message,
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: 'down',
      });
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.heroContainer}>
        <div className={Styles.loginImage}></div>

        <div className={Styles.spanContainer}>
          <span className={Styles.heading}>Finance App</span>
        </div>
      </div>
      <div className={Styles.desktopContainer}>
        <div className={Styles.authForm}>
          <div className={Styles.logo}>
            <svg className={Styles.logoIcon}>
              <path
                d="M3.52 7.143 18.72 2.889l-.805-1.668C17.387.137 16.103-.31 15.045.23L1.44 7.143h2.08ZM23.262 2.857c-.183 0-.366.027-.549.082l-3.472 1.039L8.64 7.143h17.279l-.65-2.605c-.249-1.016-1.09-1.68-2.006-1.68Z"
                fill="#24CCA7"
              />
              <path
                d="M26.587 8.037H1.688A1.686 1.686 0 0 0 .06 9.27C.024 9.41 0 9.558 0 9.708V28.33c0 .922.755 1.67 1.684 1.67h24.9c.93 0 1.684-.748 1.684-1.67v-4.663h-9.995c-1.58 0-2.864-1.273-2.864-2.84V17.107c0-.768.31-1.467.812-1.978a2.843 2.843 0 0 1 2.049-.86h9.998V9.709a1.674 1.674 0 0 0-1.68-1.67Z"
                fill="#4A56E2"
              />
              <path
                d="M29.45 15.868a1.686 1.686 0 0 0-1.134-.438H18.273c-.93 0-1.685.75-1.685 1.672v3.72c0 .922.755 1.671 1.685 1.671H28.316c.192 0 .373-.034.545-.09.223-.074.421-.194.59-.348A1.66 1.66 0 0 0 30 20.822v-3.72c0-.488-.212-.93-.55-1.234Zm-7.66 3.426a.84.84 0 0 1-.842.836h-.56a.84.84 0 0 1-.842-.836v-.555c0-.267.125-.504.324-.655a.855.855 0 0 1 .518-.18H20.948a.84.84 0 0 1 .842.835v.555Z"
                fill="#4A56E2"
              />
              <path
                d="M68.13 7.455 64.013 23.25h-4.658l-2.52-10.395-2.61 10.395h-4.657L45.563 7.455h4.117l2.273 11.498 2.812-11.498h4.23l2.7 11.498L63.99 7.455h4.14ZM69.295 16.95c0-1.29.24-2.422.72-3.397.495-.976 1.162-1.726 2.002-2.25.84-.526 1.778-.788 2.813-.788.885 0 1.657.18 2.317.54.675.36 1.193.832 1.553 1.418v-1.778h3.847V23.25H78.7v-1.777c-.375.585-.9 1.057-1.576 1.417-.66.36-1.432.54-2.317.54-1.02 0-1.95-.262-2.79-.788-.84-.54-1.507-1.297-2.002-2.272-.48-.99-.72-2.13-.72-3.42Zm9.405.023c0-.96-.27-1.718-.81-2.273a2.56 2.56 0 0 0-1.935-.832c-.765 0-1.418.277-1.958.832-.525.54-.787 1.29-.787 2.25s.262 1.725.787 2.295c.54.555 1.193.832 1.958.832a2.56 2.56 0 0 0 1.934-.832c.54-.555.81-1.313.81-2.273ZM89.178 6.6v16.65h-3.847V6.6h3.847ZM95.814 6.6v16.65h-3.848V6.6h3.848ZM110.437 16.77c0 .36-.022.735-.067 1.125h-8.708c.06.78.308 1.38.743 1.8.45.405.997.607 1.642.607.96 0 1.628-.404 2.003-1.215h4.095a5.548 5.548 0 0 1-1.148 2.228 5.584 5.584 0 0 1-2.047 1.552c-.825.375-1.748.563-2.768.563-1.23 0-2.325-.262-3.285-.788a5.601 5.601 0 0 1-2.25-2.25c-.54-.974-.81-2.114-.81-3.42 0-1.305.263-2.445.787-3.42a5.6 5.6 0 0 1 2.251-2.25c.96-.524 2.062-.787 3.307-.787 1.215 0 2.295.255 3.24.765a5.42 5.42 0 0 1 2.205 2.183c.54.945.81 2.047.81 3.307Zm-3.937-1.012c0-.66-.225-1.185-.675-1.575-.45-.39-1.013-.585-1.688-.585-.645 0-1.192.187-1.642.562-.435.375-.705.908-.81 1.598h4.815ZM119.464 19.988v3.262h-1.957c-1.395 0-2.483-.337-3.263-1.012-.78-.69-1.17-1.808-1.17-3.353V13.89h-1.53v-3.195h1.53v-3.06h3.848v3.06h2.52v3.195h-2.52v5.04c0 .375.09.645.27.81.18.165.48.248.9.248h1.372Z"
                fill="#000"
              />
            </svg>
          </div>

          <form className={Styles.form} onSubmit={handleSubmit}>
            <label className={Styles.authLabel}>
              <input
                className={Styles.input}
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={email}
              ></input>
              <svg width="21" height="16" className={Styles.inputIcon}>
                <path
                  d="M18 0H2C.9 0 .00999999.9.00999999 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V2l8 5 8-5v2Z"
                  fill="#E0E0E0"
                />
              </svg>
            </label>

            <label className={Styles.authLabel}>
              <input
                className={Styles.input}
                placeholder="Пароль"
                onChange={handleChange}
                name="password"
                type="password"
                value={password}
              ></input>
              <svg width="16" height="21" className={Styles.inputIcon}>
                <path
                  d="M14 7h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2C.9 7 0 7.9 0 9v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H4.9V5c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
                  fill="#E0E0E0"
                />
              </svg>
            </label>

            <button className={Styles.logBtn} type="submit">
              вход
            </button>

            <Link to="/register" className={Styles.authLink}>
              <button type="submit" className={Styles.regBtn}>
                регистрация
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
