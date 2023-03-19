import { AnimatePresence, motion, Reorder } from 'framer-motion';
import { useState } from 'react';
import styles from './ToDoList.module.scss';
import { v4 } from 'uuid';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../redux/toDoListSlice';

export const ToDoList = () => {
  const listItems = useSelector(state => state.toDoList.value);
  const dispatch = useDispatch();
  // const [toDo, setToDo] = useState([
  //   { name: 'TypeScript ', status: 'active', id: v4() },
  //   { name: 'Redux Toolkit', status: 'active', id: v4() },
  // ]);
  const [toDo, setToDo] = useState(listItems);

  const [inputState, setInputState] = useState('');

  const plus = () => {
    if (inputState !== '') {
      inputState && setToDo([...toDo, { name: inputState, status: 'active', id: v4() }]);
      setInputState('');
      const obj = {
        id: v4(),
        name: inputState,
      };
      return dispatch(addItem(obj));
    } else {
    }
  };

  const deleteItems = item => {
    setToDo(toDo.filter(el => el.id !== item));
    // console.log(toDo.filter(el => el.id !== item));
    // console.log(...toDo);
    return dispatch(deleteItem(item));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHead}>
        <div className={styles.plus} onClick={() => plus()}>
          {} <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className={styles.inputWrapper}>
          <input
            onKeyDown={e => {
              if (e.key === 'Enter') {
                plus();
              }
            }}
            defaultValue=""
            value={inputState}
            onChange={e => setInputState(e.target.value)}
          />
        </div>
      </div>
      <AnimatePresence>
        <Reorder.Group values={toDo} onReorder={setToDo}>
          {listItems.map(item => (
            <Reorder.Item key={item.id} value={item}>
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className={styles.item}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.minus} onClick={() => deleteItems(item.id)}>
                  <FontAwesomeIcon icon={faMinus} />
                </div>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </div>
  );
};
