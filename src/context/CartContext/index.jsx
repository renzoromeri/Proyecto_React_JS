import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([{ totalCash: 0, totalItems: 0 }]);

  function updateCart(id, name, price, stock, idCat, desc, cant) {
    const newProduct = {
      id: id,
      name: name,
      price: price,
      stock: stock,
      idCat: idCat,
      desc: desc,
      cant: cant,
    };

    const isOnCart = cart.find((item) => item.id === newProduct.id);
    let actualCartContent = cart;
    if (isOnCart) {
      let indice = actualCartContent.indexOf(isOnCart);
      newProduct.cant = isOnCart.cant + newProduct.cant;
      actualCartContent.splice(indice, 1);
      actualCartContent.unshift(newProduct);
      setCart(actualCartContent);
      totalCart();
    } else {
      actualCartContent.unshift(newProduct);
      setCart(actualCartContent);
      totalCart();
    }

    // Falta hacer la funcion para agrupar productos y para bajar el stock en base de datos
  }

  function totalCart() {
    const total = cart.reduce((acc, item) => acc + item.price * item.cant, 0);

    const items = cart.reduce((acc, item) => acc + item.cant, 0);

    setCartTotal({ totalCash: total, totalItems: items });
  }

  function removeCartItem(id) {
    const isOnCart = cart.find((item) => item.id === id);
    let actualCartContent = cart;
    if (isOnCart) {
      let indice = actualCartContent.indexOf(isOnCart);
      actualCartContent.splice(indice, 1);
      setCart(actualCartContent);
      totalCart();
    } else {
      console.log("Error Item Id not Founded");
    }
  }

  function cleanCart() {
    setCart([]);
    totalCart();
  }

  return (
    <CartContext.Provider
      value={{ cart, updateCart, cartTotal, removeCartItem, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
