import React from 'react';
import MenuItem from './menuItem';
import { GrTechnology } from 'react-icons/gr';
import styles from './SideMenu.module.scss';
import logo from '../../../../images/logo.png';


function SideMenu({goToHome}) {
  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <div className={styles['logo_container']}>
          <img src={logo} className={styles['logo']}/>
        </div>
        <MenuItem icon={<GrTechnology/>} onClick={goToHome}/>
      </div>

    </div>
  );
}

export default SideMenu;