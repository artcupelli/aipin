import React from 'react';
import styles from './MenuItem.module.scss';


function MenuItem({icon}) {
  return(
    <div className={styles['mcontainer']}>
      {icon}
    </div>
  );
}

export default item;