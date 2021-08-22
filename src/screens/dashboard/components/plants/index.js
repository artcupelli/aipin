import React, { useEffect, useState } from 'react';
import GenericList from './genericList';
import styles from './Plants.module.scss';
import PlantCard from './plantCard';
import {Plant} from '../../../../data/plants';
import PestCard from './pestCard';
import { Pest } from '../../../../data/pests';
import { Disease } from '../../../../data/disease';

function Plants() {
  const getPlantsInfo = async () => {
    const plant = new Plant();
    const response = await plant.getAllPlants();

    return response;
  }
 
  const getPestsInfo = async () => {
    const pest = new Pest();
    const response = await pest.getAllPests();

    return response;
  }
 
  const getDiseaseInfo = async () => {
    const disease = new Disease();
    const response = await disease.getAllDisease();

    return response;
  }
 
  const [plantInfo, setPlantInfo] = useState([]);
  const [pestInfo, setPestInfo] = useState([]);
  const [diseaseInfo, setDiseaseInfo] = useState([]);

  useEffect( async ()=>{
    setPestInfo(await getPestsInfo())
    setPlantInfo(await getPlantsInfo())
    setDiseaseInfo(await getDiseaseInfo())
  },[])
  
  return(
      <div className={styles['container']}>
          <div className={styles['info']}>
            Consulte qual as melhores condições para seu tipo de cultura!
          </div>
          <GenericList title="Plantas" list={Array.from(plantInfo).map((p)=>{return <PlantCard plant={p}/> })}/>
          <GenericList title="Doenças" list={Array.from(diseaseInfo).map((p)=>{return <PestCard pest={p}/> })}/>
          <GenericList title="Pragas" list={Array.from(pestInfo).map((p)=>{return <PestCard pest={p}/> })}/>
      </div>
  );
}

export default Plants;