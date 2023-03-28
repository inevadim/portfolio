import { Card } from './card/Card';
import styles from './PanelMenu.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemMenu } from '../../redux/shopSlice';
export const PanelMenu = () => {
  // const listItems = useSelector(state => state.shop.menuValue);
  const dispatch = useDispatch();
  const addItems = itemName => {
    return dispatch(addItemMenu(itemName));
  };
  return (
    <div className={styles.wrapper}>
      <Link to="portfolio/ToDo" onClick={() => addItems('ToDo')}>
        <Card name="ToDo List" icon="faListCheck" />
      </Link>
      <Link to="portfolio/Shop" onClick={() => dispatch(addItemMenu('Shop'))}>
        <Card name="Shop" icon="faBasketShopping" />
      </Link>
      <Link to="portfolio/Weather" onClick={() => dispatch(addItemMenu('Weather'))}>
        <Card name="Weather" icon="faCloud" />
      </Link>
      <a href="http://sopockin-museum.j29866cb.beget.tech/" target={'_blank'} rel="noreferrer">
        <Card name="Museum" />
      </a>
      <Link to="portfolio/Timer" onClick={() => dispatch(addItemMenu('timer'))}>
        <Card name="timer" />
      </Link>
      <Card name="Developing..." />
    </div>
  );
};
