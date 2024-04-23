/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
import { cartReducer } from '../reducer/cartReducer';

const initialState = {
    cartList : [],
    total : 0
}

//creating context
const cartContext = createContext(initialState);

//providing context
export const ContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
     const updatedCartList = state.cartList.concat(product);
     updateTotal(updatedCartList)
     dispatch({type : "ADD_TO_CART", payload :{ products : updatedCartList }} )
    }

    const removeFromCart =(product)=> {
        const updatedCartList = state.cartList.filter(current => current.id !== product.id)
        updateTotal(updatedCartList)
        dispatch({ type: "REMOVE_FROM_CART", payload :{ products : updatedCartList }})
    }

    const updateTotal =(cart)=> {
        let total = 0;
        cart.forEach(product => total = total + product.price);
        dispatch({ type: "UPDATE_TOTAL", payload : { total }})
    }


    const value = {
         products : [
            { id: 1, name: "Sony Wh-Ch510 Bluetooth Wireless", price: 149, image: "/assets/a.png" },
            { id: 2, name: "boAt Rockerz 450", price: 49, image: "/assets/b.png" },
            { id: 3, name: "JBL Tune 760NC", price: 179, image: "/assets/c.png" },
            { id: 4, name: "Logitech H111 Wired", price: 39, image: "/assets/d.png" },
            { id: 5, name: "APPLE Airpods Max Bluetooth Headset", price: 199, image: "/assets/e.png" },
            { id: 6, name: "ZEBRONICS Zeb-Thunder Wired", price: 29, image: "/assets/f.png" }
        ],
        total : state.total,
        cartList : state.cartList,
        addToCart,
        removeFromCart,
        updateTotal
    }
    console.log(value);

  return (

<cartContext.Provider value={value}>
{children}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              z
</cartContext.Provider>
)
}

export const Prop = () => {
    const context = useContext(cartContext);
    return context;
}
