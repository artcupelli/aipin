import React from 'react';
import MenuItem from './menuItem';
import { BsHouseDoor } from 'react-icons/bs';
import styles from './SideMenu.module.scss';


function SideMenu() {
  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <MenuItem icon={<BsHouseDoor/>}/>

      </div>

    </div>
  );
}

export default SideMenu;