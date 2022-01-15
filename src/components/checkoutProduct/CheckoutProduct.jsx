import { useSnackbar } from 'notistack';
import { useSateValue } from '../../context/StateProvider';
import './CheckoutProduct.css';
function CheckoutProduct({ id, image, title, price, rating, index, oderPage }) {
  const [state, dispatch] = useSateValue();
  const { enqueueSnackbar } = useSnackbar();

  const removeItemHandler = () => {
    dispatch({
      type: 'REMOVE_BASKET_ITEM',
      index: index,
    });
    enqueueSnackbar(title + ' Removed from Basket', {
      variant: 'info',
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutPruduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {oderPage ? (
          <></>
        ) : (
          <button
            className="checkoutProduct__button"
            onClick={removeItemHandler}
          >
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
