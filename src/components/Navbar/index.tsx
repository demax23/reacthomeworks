import React from 'react';
import { HomeSvgSelector } from '../../HomeSvgSelector';
import style from './Navbar.module.scss';
import Button from '../Button';

const Navbar = () => {
  return (
    <div className={style.page_navlist}>
      <div>
        <form className={style.page_search}>
          <input type="text" placeholder="Найти объявление" />
          <button type="submit" aria-label="Save">
            <HomeSvgSelector id="Search" />
          </button>
        </form>
        {/* <input type="text" placeholder="Найти объявление" />
        <button type="button">
          <HomeSvgSelector id="Search" />
        </button> */}
      </div>
      <div className={style.page_arrows}>
        <p className={style.page_arr}>1-8 из 145</p>
        <HomeSvgSelector id="ArrowLeft" />
        <HomeSvgSelector id="ArrowRight" />
      </div>
    </div>
  );
};
export default Navbar;
