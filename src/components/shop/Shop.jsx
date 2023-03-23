import { Card } from './card/Card';
import styles from './Shop.module.scss';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { visibleShop } from '../../redux/shopSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Panel } from './panel/Panel';

export const Shop = () => {
  const [mas, setMas] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const listItems = useSelector(state => state.shop.value);
  const visible = useSelector(state => state.shop.valueVisible);
  const dispatch = useDispatch();

  const i = [
    {
      id: 1,
      name: 'Jordan One Paris',
      price: 165,
      imgUrl: 'https://i.postimg.cc/8knr3Lfg/jordan-One-Paris.png',
    },
    {
      id: 2,
      name: 'Nike Dunk High Up WMNS',
      price: 250,
      imgUrl: 'https://i.postimg.cc/qqYh3dHv/nike-Dunk-High-Up-Wmns.png',
    },
    {
      id: 3,
      name: 'Nike Shox TL White',
      price: 195,
      imgUrl: 'https://i.postimg.cc/1zPg6H2w/nike-Shox-TLWhite.png',
    },
    {
      id: 4,
      name: 'Nike SB Dunk GR/FI',
      price: 165,
      imgUrl: 'https://i.postimg.cc/28sLjmxH/nike-SBDunk-GRFI.png',
    },
    {
      id: 5,
      name: 'Saucony Jazz Black',
      price: 165,
      imgUrl: 'https://i.postimg.cc/sDQZR15Q/saucony-Jazz-Black.png',
    },
    {
      id: 6,
      name: 'Nike SB Off-Wite Mult',
      price: 165,
      imgUrl: 'https://i.postimg.cc/RZw6N8sv/nike-SBOff-Wite-Mult.png',
    },
  ];

  const visibleItem = () => {
    return dispatch(visibleShop());
  };

  // useEffect(() => {
  //   axios.get('./bdShop.json').then(({ data }) => {
  //     setMas(data.shop_item);
  //     setIsLoad(true);
  //   });
  // }, [setMas]);

  useEffect(() => {
    setMas(i);
    setIsLoad(true);
  }, [setMas]);

  return (
    <div>
      {isLoad ? (
        <div className={styles.shop}>
          {mas.map(item => {
            return (
              <div key={item.id}>
                <Card id={item.id} name={item.name} price={item.price} imgUrl={item.imgUrl} />
              </div>
            );
          })}

          {/* <div className={styles.arrow2}></div> */}
        </div>
      ) : (
        <div style={{ marginLeft: '100px', marginTop: '30px' }}>Loading...</div>
      )}

      <div className={styles.arrow} onClick={() => visibleItem()}>
        <div className={styles.arrowInner}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </div>
        <div className={styles.count}>{listItems.length}</div>
      </div>
      {visible && <Panel />}
    </div>
  );
};
