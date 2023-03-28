import { useState } from 'react';
import styles from './JsPractic.module.scss';

export const JsPractic = () => {
  const [arrNumber, setArrNumber] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [valueInput, setValueInput] = useState();

  const doubleArr = () => {
    return setArrNumber(arrNumber.map(item => item * 2));
  };
  const removeItem = itemArr => {
    return setArrNumber(arrNumber.filter(item => item !== itemArr));
  };
  const addItem = () => {
    setArrNumber([...arrNumber, valueInput]);
    setValueInput('');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperToDo}>
        {arrNumber.map(item => (
          <div className={styles.wrapperItem} key={item}>
            {item}{' '}
            <span onClick={() => removeItem(item)} style={{ cursor: 'pointer' }}>
              {' '}
              delete
            </span>
          </div>
        ))}
      </div>
      <div onClick={() => doubleArr()} style={{ cursor: 'pointer', overflow: 'hidden' }}>
        Double
      </div>
      <input
        onKeyDown={e => {
          if (e.key === 'Enter') {
            addItem();
          }
        }}
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
      />{' '}
      <div onClick={() => addItem()} style={{ cursor: 'pointer', overflow: 'hidden' }}>
        Add item
      </div>
    </div>
  );
};
