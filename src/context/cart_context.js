import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  const localCartData = localStorage.getItem("myCart");
  if (localCartData) {
    try {
      return JSON.parse(localCartData);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment or decrement
  const setDecrease=(id)=>{
    dispatch({type:"SET_DECREMENT" ,payload:id })
  }
  const setIncrease=(id)=>{
    dispatch({type:"SET_INCREMENT" ,payload:id })
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
    // to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
      };

  useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem ,clearCart,setDecrease,setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
