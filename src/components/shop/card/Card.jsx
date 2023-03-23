import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/shopSlice';
import { v4 } from 'uuid';
export const Card = ({ id, name, price, imgUrl }) => {
  const dispatch = useDispatch();

  const addItems = name => {
    const objItem = {
      id: v4(),
      name: name.name,
      price,
      imgUrl: name.imgUrl,
    };
    return dispatch(addItem(objItem));
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardOverlay}></div>

        <div className={styles.cardInner}>
          <div className={styles.wrapperCard}>
            <img src={imgUrl} alt={id} />
            <div className={styles.nameCard}>{name}</div>
            <div className={styles.priceCard}>Price - {price}</div>
            <div className={styles.buyCard} onClick={() => addItems({ name, imgUrl })}>
              BUY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
