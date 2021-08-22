import React from 'react';
import MenuItem from './menuItem';
import { BsHouseDoor } from 'react-icons/bs';
import { IoLeafOutline } from 'react-icons/io5';
import styles from './SideMenu.module.scss';


function SideMenu({goToHome}) {

  const goToDashboard = () => {goToHome("dashboard")}
  const goToPlantsAndDeseases = () => {goToHome("plants")}


  return (
    <div className={styles['container']}>
      <div className={styles['menu']}>
        <MenuItem icon={<BsHouseDoor/>} onClick={goToDashboard}/>
        <MenuItem icon={<IoLeafOutline/>} onClick={goToPlantsAndDeseases}/>

      </div>

    </div>
  );
}

export default SideMenu;