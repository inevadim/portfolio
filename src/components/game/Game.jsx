import { useEffect, useState } from 'react';
import { PopUp } from './components/popUp/PopUp';
import styles from './Game.module.scss';

export const Game = () => {
  const [arr, setArr] = useState([
    { id: 0, type: 'wood', value: 0, active: false },
    { id: 1, type: 'wood', value: 0, active: false },
    { id: 2, type: 'wood', value: 0, active: false },
    { id: 3, type: 'wood', value: 0, active: false },
    { id: 4, type: 'wood', value: 0, active: false },
    { id: 5, type: 'wood', value: 0, active: false },
  ]);

  const [wood, setWood] = useState(0);
  const [autoWood, setAutoWood] = useState(1);
  const [stoune, setStoune] = useState(0);
  const [autoStoune, setAutoStoune] = useState(2);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWood(wood + autoWood);
      setStoune(stoune + autoStoune);
    }, 1000);

    return () => clearTimeout(timer);
  }, [wood, stoune]);

  const openModal = idItem => {
    const id = idItem;
    setArr(arr.map(w => (w.active = false)));
    // setArr(arr.map(e => (e.id === id ? { ...e, active: !e.active } : e)));

    setArr(arr.map(e => (e.id === id ? { ...e, active: true } : e)));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperDashboard}>
        <div className={styles.dashboardItem}>Wood: {wood}</div>
        <div className={styles.dashboardItem}>Stoune: {stoune}</div>
      </div>
      <div className={styles.wrapperItems}>
        {arr.map(item => (
          <div
            className={styles.wrapperItem}
            key={item.id}
            onClick={() => {
              openModal(item.id);
            }}>
            {item.id}
            {item.type}
            {item.active && <PopUp />}
          </div>
        ))}
      </div>
    </div>
  );
};
