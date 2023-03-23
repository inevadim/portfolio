import { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion';
import styles from './Menu.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemMenu } from '../../redux/shopSlice';
// import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = () => {
  const dispatch = useDispatch();

  const listItems = useSelector(state => state.shop.menuValue);
  // if(listItems == null){const [menu, setMenu] = useState(listItems)} else{const [menu, setMenu] = useState(['ToDo', 'Shop', 'Weather', 'Weather'])}}
  const [menu, setMenu] = useState(listItems);

  useEffect(() => {
    const i = JSON.parse(localStorage.getItem('menu'));
    if (i != null) {
      setMenu(i);
    } else {
    }
    // setMenu(i);
    // localStorage.setItem('menu', JSON.stringify(menu));
    // if (menu == null) {
    //   setMenu(['ToDo, Shop, Weather']);
    // } else {
    //   setMenu(JSON.parse(localStorage.getItem('menu')));
    // }
    // console.log('change', menu);
    // const listItems = useSelector(state => state.shop.menuValue);
  }, [listItems]);

  const removeItemMenu = item => {
    setMenu(menu.filter(el => el !== item));
    return dispatch(deleteItemMenu(item));
  };

  return (
    <div className={styles.wrapperMenuPlus}>
      <Link to="/">
        <div className={styles.plus}>+</div>
      </Link>
      <Reorder.Group axis="x" values={menu} onReorder={setMenu}>
        {/* <div className={styles.wrapperIconArrow}>
        <div className={styles.iconArrow}>
          <FontAwesomeIcon icon={faAnglesUp} />
        </div>
      </div> */}
        <div className={styles.wrapper}>
          {menu.map(item => (
            <Reorder.Item key={item} value={item}>
              <div className={styles.wrapperItem}>
                {/* <Link to="/ToDoList"> */}

                <div className={styles.item}>
                  {/* <NavLink></NavLink> */}
                  <NavLink
                    to={`portfolio/${item}`}
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? 'rgb(241, 234, 234)' : '',
                      };
                    }}>
                    {item}{' '}
                  </NavLink>
                </div>

                <div className={styles.itemDelete} onClick={() => removeItemMenu(item)}>
                  <Link to="/">❌</Link>
                </div>
              </div>
            </Reorder.Item>
          ))}
        </div>
      </Reorder.Group>
    </div>
  );
};
