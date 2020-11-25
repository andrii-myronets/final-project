import React from 'react';
import { server } from '../../API';
import { setOrder } from './actions';
import axios from 'axios';
import { openModal } from '../modal/actions';

export const createOrder = (order) => (_, getState) => {
  const state = getState()
  const newOrder = {
    deliveryAddress: {
      country: 'Ukraine',
      city: order.city || 'none',
      address: `${order.street} ${order.house}, кв.${order.flat}` || 'none',
    },
    shipping: order.delivery,
    payMethod: order.payMethod,
    status: order.status || 'not shiped',
    email: order.email,
    mobile: `${order.prefix}${order.phone}`,
    letterSubject: 'Спасибо за ваш заказ!',
    letterHtml: `<h1>Your order №XXXXXXXX is placed. </h1>
        <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
        <p>Sincerely, your WMF team.</p>`,
  };

  if (state.customer.customer._id) {
    return {
      ...newOrder,
      customerId: `${state.customer.customer._id}`,
    };
  }

  return {
    ...newOrder,
    products: state.cart.cart,
  };
};

const createLetter = (data, order) => {
  const CreateFullAddress = () => {
    let FullAddress = '';
    if (data.shipping !== 'Pick up from store') FullAddress = 'Country: ' + data.deliveryAddress.country + ', City: ' + data.deliveryAddress.city + ', Address: ' + data.deliveryAddress.address
    else FullAddress = '-'
    return FullAddress
  }

  const letter = {
    FullName: order.name + ' ' + order.surname,
    FullAddress: CreateFullAddress(),
    Shipping: data.shipping,
    PayMethod: data.payMethod,
    Email: data.email,
    Mobile: data.mobile,
    OrderNo: data.orderNo,
    Date: data.date,
    TotalSum: data.totalSum,
    Status: data.status
  }
  return letter;
};

const sendLetter = (letter) => {
  axios.post('https://formcarry.com/s/Eu_mXAz6nC', letter, {headers: {Accept: 'application/json'}})
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export const confirmOrder = (order) => async (dispatch) => {
  const newOrder = dispatch(createOrder(order))
  console.log(newOrder)
  try {
    const { status, data } = await server.post('/orders', newOrder);
    
    if (status === 200 && !data.message) {
      dispatch(setOrder(data.order))
      sendLetter(createLetter(data.order))
      dispatch(openModal({ content: <h2> Ваш заказ № {data.order.orderNo} принят</h2>}))
    }
  } catch (error) {
    console.log(error)
  }
};
