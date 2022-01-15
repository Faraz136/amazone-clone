import './Product.css';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSateValue } from '../../context/StateProvider';
import { useSnackbar } from 'notistack';

function Product({ title, image, price, rating }) {
  const [state, dispatch] = useSateValue();
  const { enqueueSnackbar } = useSnackbar();

  const addToBasketHandle = () => {
    //dispatching actions
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        title: title,
        image: image,
        price: price,
        rating: rating,
        userId: 'ikdskxvkfvxn',
      },
    });
    enqueueSnackbar(title + ' Added to Basket', {
      variant: 'success',
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__img" src={image} alt="" />
      <IconButton onClick={addToBasketHandle}>
        <AddShoppingCartIcon style={{ color: '#f0c14b' }} />
      </IconButton>
    </div>
  );
}

export default Product;
