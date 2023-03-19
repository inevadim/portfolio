import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.scss';
import {
  faBasketShopping,
  faCloud,
  faListCheck,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

export const Card = ({ name }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardOverlay}></div>

        <div className={styles.cardInner}>
          {name === 'Shop' ? (
            <FontAwesomeIcon icon={faBasketShopping} />
          ) : name === 'Weather' ? (
            <FontAwesomeIcon icon={faCloud} />
          ) : name === 'ToDo List' ? (
            <FontAwesomeIcon icon={faListCheck} />
          ) : name === 'Developing...' ? (
            <FontAwesomeIcon icon={faWrench} />
          ) : (
            ''
          )}
          {name}
        </div>
      </div>
    </div>
  );
};
