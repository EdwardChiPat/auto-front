import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import data from './shopping/reducer';

const reducers = combineReducers({
  data
})

const masterReducers = (state, action) => {
  if (action.type === HYDRATE){
    const nextState = {
      ...state,
      data: {
        products: action.payload.data.products,
        currency: action.payload.data.currency,
        cart: [...action.payload.data.cart, ...state.data.cart],
        ticket: action.payload.data.ticket
      }
    }
    return nextState
  } else {
    return reducers(state, action)
  }
}
export const store = () => configureStore({reducer: masterReducers});

export const wrapper = createWrapper(store, {debug: true});