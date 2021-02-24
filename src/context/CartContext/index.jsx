import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([{ id:1, name: "Vino", price: 500, stock: 7, idCat: "vinos", desc: "vino rico", cant: 0 }]);
  //   objeto { item: {} , quantity } { item: {} , quantity: 0 }

  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={{cart, setCart, cartSize: cart.length}}>
    {children}
    </CartContext.Provider>;
};
