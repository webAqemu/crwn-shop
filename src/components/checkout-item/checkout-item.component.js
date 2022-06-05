import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.sass';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const deleteItem = () => deleteItemFromCart(cartItem);

  const increaseItemQuantity = () => addItemToCart(cartItem);
  const decreaseItemQuantity = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <button className='arrow' onClick={decreaseItemQuantity}>
          &#10094;
        </button>
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={increaseItemQuantity}>
          &#10095;
        </button>
      </span>
      <span className='price'>{price * quantity}</span>
      <div className='remove-button' onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
