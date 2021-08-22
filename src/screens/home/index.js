import React from 'react';
import { SideMenu } from './components';
import styles from './Home.module.scss';


function Home() {
  return(
      <div className={styles['container']}>
          <SideMenu/>
          
      </div>
  );
}

export default Home;