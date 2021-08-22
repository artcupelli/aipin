import React from 'react';
import styles from './InfoItem.module.scss';

function InfoItem({title, info}) {

  return (
      <div className={styles['container']}>
          <h2 className={styles['title']}>{title}</h2>
          <h2 className={styles['info']}>{info}</h2>
      </div>
  );
}

export default InfoItem;