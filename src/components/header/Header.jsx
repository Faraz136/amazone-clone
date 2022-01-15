import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useSateValue } from '../../context/StateProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useSnackbar } from 'notistack';

function Header() {
  const [ads, setAds] = useState([]);
  const [user, setUserName] = useState('');

  const [state, dispatch] = useSateValue();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (state) {
      setAds(state.basket);

      if (state.user) {
        const name = state.user.email.slice(0, 3);
        setUserName(name);
      } else {
        setUserName('');
      }
    }
  }, [state]);

  const logout = async (event) => {
    event.preventDefault();

    await signOut(auth);
    enqueueSnackbar(user.toLocaleUpperCase() + ' Loged Out', {
      variant: 'success',
    });
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchIn" type="text" />
        <IconButton>
          <SearchIcon className="header__searchIcon" />
        </IconButton>
      </div>
      <div className="headre__nav">
        <div className="header__option">
          {user ? (
            <span
              onClick={logout}
              title="Log-out"
              style={{ cursor: 'pointer' }}
              className="header__optionLineTwo"
            >
              {user.toUpperCase()} {' Log-out'}
            </span>
          ) : (
            <>
              <span className="header__optionLineOne">{'Hello Guests'}</span>
              <Link
                style={{ textDecoration: 'none' }}
                className="link"
                to="/signup"
              >
                <span className="header__optionLineTwo">Sign in</span>
              </Link>
            </>
          )}
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <Link style={{ textDecoration: 'none' }} className="link" to="/order">
            <span className="header__optionLineTwo">&Orders</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout" className="link">
            <ShoppingBasketIcon />
          </Link>
          <span className="header__basketCount header__optionLineTwo">
            {ads ? ads.length : 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
