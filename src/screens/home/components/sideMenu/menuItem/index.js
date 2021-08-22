import React from 'react';
import styles from './MenuItem.module.scss';


function MenuItem({icon, onClick}) {
  return(
    <div className={styles['container']} onClick={onClick}>
      <span className={styles['hint']}>Minha Dashboard</span>
      
      {icon}
    </div>
  );
}

export default MenuItem;