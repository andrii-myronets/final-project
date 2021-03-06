import {server} from '../../API';
import { addToFavorites, removeFromFavorites, setFavorites } from './actions';

function unique (arr) {
  const res = new Map();
  return arr.filter((a) => !res.has(a._id) && res.set(a._id, 1))
};

const updatedFavorites = async (state) => {
  const {customer} = state;

  if (customer.isLogined) {
    if (state.favorites.favorites.length > 0) {
      const productsInFav = state.favorites.favorites.map(item => item._id);
      const updatedFav = {products: productsInFav}
      try {
        await server.put('/wishlist', updatedFav)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

export const getFavorites = () => async (dispatch, getState) => {
  const state = getState();
  const {customer} = state;
 
  if (customer.isLogined) {
    try {
      const {status, data} = await server.get('/wishlist')
      if (status === 200) {
        let itemsToFav;
        data ? itemsToFav = [...state.favorites.favorites, ...data.products] : itemsToFav = [...state.favorites.favorites]
        const result = unique(itemsToFav);
        dispatch(setFavorites(result));
        const newState = getState();
        updatedFavorites(newState);
      }
    } catch (error) {
      console.log(error)
    }
  }
};

export const addProductToFav = (productItem) => (dispatch, getState) => {
  dispatch(addToFavorites(productItem));
  const state = getState();
  updatedFavorites(state);
}

export const removeProductFromFav = (productItem) => async (dispatch, getState) => {
  const state = getState();
  const {customer} = state;
  if (customer.isLogined) {
    try {
      const {status} = await server.delete(`/wishlist/${productItem}`)
      if (status === 200) {
        dispatch(removeFromFavorites(productItem));
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    dispatch(removeFromFavorites(productItem));
  }
}