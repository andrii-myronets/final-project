import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { MODULE_NAME as modalModuleName } from './modal/selectors';
import { reducer as modalReducer } from './modal/reducer';

import { MODULE_NAME as cartModuleName } from './cart/selectors';
import { reducer as cartReducer } from './cart/reducer';

import { MODULE_NAME as promotionsModuleName } from './promotions/selectors';
import { reducer as promotionsReducer } from './promotions/reducer';

import { MODULE_NAME as productsModuleName } from './products/selectors';
import { reducer as productReducer } from './products/reducer';

import { MODULE_NAME as favoritesModuleNAme } from './favorites/selectors';
import { reducer as favoritesReducer } from './favorites/reducer';

import { MODULE_NAME as authModuleName } from './auth/selectors';
import { reducer as authReducer } from './auth/reducer';

import { MODULE_NAME as customerModuleName } from './customer/slectors';
import { reducer as customerReducer } from './customer/reducer';

import { MODULE_NAME as categoriesModuleName } from './categories/selectors';
import { reducer as categoriesReducer } from './categories/reducer';

import { MODULE_NAME as orderModuleName } from './order/selectors';
import { reducer as orderReducer } from './order/reducer';

const persistCart = {
  key: 'cart',
  storage,
};

const persistConfigAuth = {
  key: 'auth',
  storage,
};

const persistFavorite = {
  key: 'favorite',
  storage,
};

const rootReducer = combineReducers({
  [modalModuleName]: modalReducer,
  [cartModuleName]: persistReducer(persistCart, cartReducer),
  [authModuleName]: persistReducer(persistConfigAuth, authReducer),
  [productsModuleName]: productReducer,
  [promotionsModuleName]: promotionsReducer,
  [categoriesModuleName]: categoriesReducer,
  [favoritesModuleNAme]: persistReducer(persistFavorite, favoritesReducer),
  [customerModuleName]: customerReducer,
  [orderModuleName]: orderReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
