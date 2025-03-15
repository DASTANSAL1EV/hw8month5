import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const GET_CATEGORIES = "GET_CATEGORIES";
const ADD_CART = "ADD_CART";
const DECREMENT_CART = "DECREMENT_CART";
const DELETE_CART = "DELETE_CART";
const PRO_LOADER = "PRO_LOADER";

export const getCategories = () => {
    const action = createAction(GET_CATEGORIES);
    return (dispatch) => {
        axios("https://fakestoreapi.com/products/categories").then(({ data }) =>
            dispatch(action(data))
        );
    };
};

export const addCart = createAction(ADD_CART);
export const decrementCart = createAction(DECREMENT_CART);
export const deleteCart = createAction(DELETE_CART);
export const proloaderCart = createAction(PRO_LOADER);

const initialState = {
    loader: false,
    cart: [],
    categories: [],
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(GET_CATEGORIES, (state, action) => {
            state.categories = action.payload;
        })
        .addCase(PRO_LOADER, (state, action) => {
            state.loader = action.payload;
        })
        .addCase(ADD_CART, (state, action) => {
            const idx = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (idx > -1) {
                state.cart[idx].count++;
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1,
                });
            }
        })
        .addCase(DECREMENT_CART, (state, action) => {
            const idx = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            if (idx > -1 && state.cart[idx].count > 1) {
                state.cart[idx].count--;
            }
        })
        .addCase(DELETE_CART, (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        });
});
