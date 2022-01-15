import { useEffect, useState } from 'react';
import { useSateValue } from '../../context/StateProvider';
import './Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { collection, setDoc, addDoc } from 'firebase/firestore/lite';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { CircularProgress } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GooglePayButton from '@google-pay/button-react';
import { db } from '../../firebase';

function Payment() {
  const [state, dispatch] = useSateValue();
  const [email, setEmail] = useState('');
  const nevigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [ads, setAds] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (state) {
      setAds(state.basket);
      const price = ads
        ? ads.reduce((amount, item) => item.price + amount, 0)
        : 0;
      setTotal(price);
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
    <div className="payment">
      <div className="payment__container">
        <h1>
          {' '}
          CheckOut{' '}
          <Link
            to="/checkout"
            style={{ textDecoration: 'none' }}
            className="link"
          >
            <ShoppingBasketIcon htmlColor="#f0c14b" />
          </Link>{' '}
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Dilivery Address</h3>
          </div>
          <div className="payemnt__address">
            <p>{email}</p>
            <p>123 React lane</p>
            <p>Faislabad Pakistan</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methode</h3>
          </div>
          <div className="payment__details">
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: 'CARD',
                    parameters: {
                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                      type: 'PAYMENT_GATEWAY',
                      parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: '12345678901234567890',
                  merchantName: 'Demo Merchant',
                },
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: total.toString(),
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();

                // data base posting

                enqueueSnackbar('Payment Done', {
                  variant: 'success',
                });

                nevigate('/order');
              }}
              className="payment__button"
            >
              Pay {total} {'$'}{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
