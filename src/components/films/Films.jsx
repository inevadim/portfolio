import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Films.module.scss';

export const Films = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/301`;
    fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': '5b34b8ae-a7e8-448f-afe9-4790be373841',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err));
  }, [data]);

  return (
    <div className={styles.wrapperItem}>
      <div className={styles.imgItem}>
        <img src="https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg" />
      </div>
      <div className={styles.nameItem}>{data.nameRu}</div>
      <div>{data.description}</div>
    </div>
  );
};
