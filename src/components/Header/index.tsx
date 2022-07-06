import React from 'react';
import { HomeSvgSelector } from '../../HomeSvgSelector';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <div className={style.page_logo}>
        <HomeSvgSelector id="Logo" />
      </div>
      <div className={style.page_profile}>
        <HomeSvgSelector id="human" />
        <div className={style.page_human}>Профиль</div>
      </div>
    </div>
  );
};

export default Header;
