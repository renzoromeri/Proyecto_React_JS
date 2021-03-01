import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([{ id:1, name: "Vino", price: 500, stock: 7, idCat: "vinos", desc: "vino rico", cant: 0 }]);
  //   objeto { item: {} , quantity } { item: {} , quantity: 0 }

  const [cart, setCart] = useState([]);

  // Si dejo la funcion aca, no me funciona!!
  // const inCart = (obj, contador) => {

  //   console.log(obj)
  //   console.log(contador)
  //   if (cart.length === 0) {
  //     setCart([...cart, { item: obj, quantity: contador }]);
  //   } else if (cart.includes(obj)) {
  //     for (let index = 0; index < cart.length; index++) {
  //       if (cart[index].item.id === obj.id) {
  //         cart[index].quantity = cart[index].quantity + contador;
  //         break;
  //       }
  //     }
  //   } else {
  //     setCart([...cart, { item: obj, quantity: contador }]);
  //   }
  // };

  // const inCarrito = () => {
  //   debugger;
  //   if (cartSize === 0) {
  //     setCart([...cart, { item: product, quantity: contador }]);
  //   } else {
  //     for (let index = 0; index < cart.length; index++) {
  //       const found = cart.find((element) => element.item.id === product.id);
  //       console.log(found);
  //       if (found != null) {
  //         // cart[index].quantity = cart[index].quantity + contador;
  //         setCart(cart => ({
  //           ...cart[index],
  //           quantity: cart[index].quantity + contador,
  //         }));
  //         // console.log(cart);
  //         break;
  //       } else {
  //         setCart([...cart, { item: product, quantity: contador }]);
  //         break;
  //       }
  //       //   break;

  //       // if (cart[index].item.id == product.id) {
  //       //   cart[index].quantity = cart[index].quantity + contador;
  //       //   break;
  //     }
  //   }
  // };

  return (
    <CartContext.Provider value={{ cart, setCart, cartSize: cart.length }}>
      {children}
    </CartContext.Provider>
  );
};
