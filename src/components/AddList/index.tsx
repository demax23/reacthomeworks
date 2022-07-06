import React from 'react';
import { HomeSvgSelector } from '../../HomeSvgSelector';
import style from './AddsList.module.scss';

const AddsList = () => {
  return (
    <div className={style.page_addslist}>
      <div>
        <h1>Объявление</h1>
        <p>Всего 45</p>
      </div>
      <div className={style.page_arrows}>
        <HomeSvgSelector id="Adds+" />
      </div>
    </div>
  );
};
export default AddsList;
