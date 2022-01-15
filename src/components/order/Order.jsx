import { CircularProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSateValue } from '../../context/StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import Subtotal from '../subtotal/Subtotal';
import './Order.css';

function Order() {
  const [state, dispatch] = useSateValue();
  const [ads, setAds] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const nevigate = useNavigate();
  const [email, setEmail] = useState('');
  const oderPage = true;

  useEffect(() => {
    if (state) {
      setAds(state.basket);

      if (state.basket.length < 1) {
        enqueueSnackbar('Basket is empty', {
          variant: 'error',
        });
        nevigate('/');
      }

      if (state.user) {
        const email = state.user.email;
        setEmail(email);
      } else {
        setEmail('');
        enqueueSnackbar('You need to login first', {
          variant: 'error',
        });
        nevigate('/login');
      }
    }
  }, [state, ads]);
  return (
    <div className="order">
      <div className="order__container">
        <h1>Order Details</h1>

        <div className="order__items">
          {ads ? (
            ads.map((item, index) => (
              <CheckoutProduct
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                index={index}
                oderPage={oderPage}
              />
            ))
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="oredr__subtotal">
          Total Price Paid{' '}
          <strong>
            {ads ? ads.reduce((amount, item) => item.price + amount, 0) : 0} $
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Order;
