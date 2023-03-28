import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Secundomer.module.scss';

export const Secundomer = () => {
  const [minLeft, setMinLeft] = useState(0);
  const [minRight, setMinRight] = useState(0);
  const [secLeft, setSecLeft] = useState(0);
  const [secRight, setSecRight] = useState(0);
  //   const [milLeft, setMilLeft] = useState(0);
  //   const [milRight, setMilRight] = useState(0);
  const [time, setTime] = useState(0);

  const start = () => {
    return setTime(1);
  };
  const stop = () => {
    return setTime(0);
  };
  const reset = () => {
    setMinLeft(0);
    setMinRight(0);
    setSecLeft(0);
    setSecRight(0);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSecRight(secRight + time);
      if (secRight === 9) {
        setSecRight(0);
        setSecLeft(secLeft + 1);
        if (secRight === 9 && secLeft === 5) {
          setSecRight(0);
          setSecLeft(0);
          if (minRight < 9) {
            setMinRight(minRight + 1);
          } else {
            setMinRight(0);
            if (minLeft < 9) {
              setMinLeft(minLeft + 1);
            } else {
              setMinLeft(0);
              //   if (milRight < 9) {
              //     setMilRight(milRight + 1);
              //   } else {
              //     setMilRight(0);
              //     setMilLeft(milLeft + 1);
              //   }
            }
          }
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [minLeft, minRight, secLeft, secRight, time]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperSecundomer}>
        <div className={styles.tabloWrapper}>
          <div className={styles.tablo}>
            {/* <div className={styles.tabloItem}>{milLeft}</div>
            <div className={styles.tabloItem}> {milRight}</div>
            <div className={styles.doubleDot}>:</div> */}
            <div className={styles.tabloItem}>{minLeft}</div>
            <div className={styles.tabloItem}> {minRight}</div>
            <div className={styles.doubleDot}>:</div>
            <div className={styles.tabloItem}>{secLeft}</div>
            <div className={styles.tabloItem}> {secRight} </div>
          </div>
        </div>
        <div className={styles.panel}>
          <div
            className={styles.element}
            onClick={() => {
              start();
            }}>
            START
          </div>
          <div
            className={styles.element}
            onClick={() => {
              stop();
            }}>
            STOP
          </div>
          <div
            className={styles.element}
            onClick={() => {
              reset();
            }}>
            RESET
          </div>
        </div>
      </div>
    </div>
  );
};
