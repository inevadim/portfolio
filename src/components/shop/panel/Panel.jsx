import styles from './Panel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../redux/shopSlice';

export const Panel = () => {
  const listItems = useSelector(state => state.shop.value);
  const dispatch = useDispatch();
  const deleteItems = itemName => {
    return dispatch(deleteItem(itemName));
  };
  // const visibleItem = () => {
  //   return dispatch(visibleShop());
  // };
  return (
    <div className={styles.wrapper}>
      <div className={styles.wraperItem}>
        <div className={styles.itemWrapper}>
          {listItems.map(item => {
            return (
              <div className={styles.item} key={item.name}>
                <div className={styles.imgItem}>
                  <img src={item.imgUrl} alt={item.name} />
                </div>
                <div className={styles.wrapperContent}>
                  <div className={styles.nameItem}>{item.name}</div>
                  <div className={styles.priceItem}>price: {item.price} BYN</div>
                </div>
                {/* <div className={styles.deleteItem} onClick={() => deleteItems(item.name)}>
                ❌
              </div> */}
                <div className={styles.deleteItem} onClick={() => deleteItems(item.name)}>
                  ❌
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.wrapperBuy}>
          <div className={styles.price}>
            price:{' '}
            {listItems
              .map(item => {
                return item.price;
              })
              .reduce((sum, current) => sum + current, 0)}{' '}
            byn
          </div>
          <div className={styles.buy}>BUY</div>
        </div>
      </div>
    </div>
  );
};
