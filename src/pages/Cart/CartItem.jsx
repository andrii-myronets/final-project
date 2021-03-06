import React from 'react';
import PropTypes from 'prop-types';

import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { Counter } from '../../components/Counter';
import { CloseBtnContainer, CartPrice, CartColor, CartNameCode, CartImage, CartItemContainer } from './StyledCartItem';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../store/cart/operations.jsx';
import { StyledLink } from '../../components/ProductItem/StyledProductItem.jsx';

export const CartItem = ({
  imageUrl,
  currentPrice,
  name,
  color,
  itemNo,
  quantity,
  cartQuantity,
  _id,
  route,
}) => {
  const dispatch = useDispatch();
  const btnCloseheandler = (id) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <CartItemContainer>
      <CloseBtnContainer onClick={() => btnCloseheandler(_id)}>
        {icon.close}
      </CloseBtnContainer>
      <StyledLink to={`/products/${route}`}>
        <CartImage src={imageUrl[0]} />
      </StyledLink>
      <StyledLink to={`/products/${route}`}>
        <CartNameCode>
          <h4>{name}</h4>
          <p>Код: {itemNo}</p>
        </CartNameCode>
      </StyledLink>
      <CartColor>{color}</CartColor>
      <Counter cartQuantity={cartQuantity} quantity={quantity} id={_id} name={name}/>
      <CartPrice>
        {(currentPrice * cartQuantity).toLocaleString()} грн
      </CartPrice>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  imageUrl: PropTypes.array,
  currentPrice: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  itemNo: PropTypes.string,
  quantity: PropTypes.number,
  cartQuantityy: PropTypes.number,
  _id: PropTypes.string,
  route: PropTypes.string,
};
