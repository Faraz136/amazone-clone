import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useEffect, useState } from 'react';
import { useSateValue } from '../../context/StateProvider';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Subtotal(oderPage) {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

  const [state, dispatch] = useSateValue();
  const [user, setUserName] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log(state);
    if (state) {
      setAds(state.basket);
      if (state.user) {
        setUserName(state.user);
      } else {
        setUserName('');
      }
    }
  }, [state]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({ads ? ads.length : 0} items): <strong>{value} </strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__In" type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={ads ? ads.reduce((amount, item) => item.price + amount, 0) : 0}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          if (user) {
            navigate('/payment');
          } else {
            enqueueSnackbar('You need to login first', {
              variant: 'error',
            });
            navigate('/login');
          }
        }}
        className="subtotal__button"
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
