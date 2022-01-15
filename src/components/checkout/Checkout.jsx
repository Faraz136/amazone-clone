import { useEffect, useState } from 'react';
import { useSateValue } from '../../context/StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import Subtotal from '../subtotal/Subtotal';
import './Checkout.css';
import { CircularProgress } from '@mui/material';
import FlipMove from 'react-flip-move';

function Checkout() {
  const [ads, setAds] = useState([]);
  const [user, setUserName] = useState('');
  const [state, dispatch] = useSateValue();

  useEffect(() => {
    if (state) {
      setAds(state.basket);
    }
    if (state.user) {
      console.log(state.user.email);
      const name = state.user.email.slice(0, 3);
      setUserName(name);
    } else {
      setUserName('');
    }
  }, [state]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/ILM/Fuji_ILM_Ship_en_US._CB665226464_.png"
          alt=""
          className="checout__ad"
        />
        <div className="">
          <h2 className="checkout__title">
            {user ? user.toUpperCase() + ' `s' : ''} Checkout Basket
          </h2>
          <div className="checkout__flex">
            {ads ? (
              ads.map((item, index) => (
                <CheckoutProduct
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  index={index}
                />
              ))
            ) : (
              <CircularProgress />
            )}
          </div>
        </div>
      </div>
      <div className="flex"></div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
