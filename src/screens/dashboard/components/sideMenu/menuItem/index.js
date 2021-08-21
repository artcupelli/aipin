import React from 'react';
import styles from './MenuItem.module.scss';


function MenuItem({icon}) {
  return(
    <div className={styles['container']}>
      {icon}
    </div>
  );
}

export default MenuItem;