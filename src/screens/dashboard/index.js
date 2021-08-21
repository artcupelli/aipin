import React from 'react';
import { SideMenu, TodayWeather } from './components';
import styles from './Dashboard.module.scss';

function Dashboard() {
  return (
    <div className={styles['container']}>
      <SideMenu/>
      <TodayWeather/>

    </div>
  );
}

export default Dashboard;