import React, { useEffect, useState } from 'react';
import Alert from './alert';
import styles from './Welcome.module.scss';

function Welcome() {
    const [alerts, setAlerts] = useState(new Map());
    const [changeAlert, setChangeAlert] = useState(false);


    const fillAlerts = () => {
        var alertsAux = new Map()

        alertsAux.set(0, "Atenção às temperaturas instáveis esta semana!");
        alertsAux.set(1, "Chuvas intensas nas próximas semanas");
        alertsAux.set(2, "Geada no próximo mês");

        setAlerts(alertsAux);
    }

    const closeAlert = (id) => {
        var alertsAux = alerts;
        alertsAux.delete(id);
        setAlerts(alertsAux)
        setChangeAlert(!changeAlert)
    }


    useEffect(()=>{
        fillAlerts();
    },[])

  return (
      <div className={styles['container']}>

          <div className={styles['col1']}>
            <h2 className={styles['welcome']}>Bem Vindo, José!</h2>
            <h2 className={styles['hru']}>Como vai hoje?</h2>
          </div>

          <div className={styles['col2']}>
            {
                (changeAlert || true) &&
                Array.from(alerts).map((a)=>{return <Alert id={a[0]} text={a[1]} close={closeAlert} />})
            }
          </div>

      </div>
  );
}

export default Welcome;