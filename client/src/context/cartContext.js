import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If item already exists in cart, update its quantity
      const updatedCartItems = [...cart];
      updatedCartItems[existingItemIndex].quantity++;
      setCart(updatedCartItems);
    } else {
      // If item doesn't exist in cart, add it
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  function updateCartItemQuantity(itemId, quantity) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  }

  useEffect(() => {
    // get cart items from local storage on mount
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  useEffect(() => {
    // update local storage when cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function removeFromCart(itemId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  }

  function getCartItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function incrementCartItemQuantity(itemId) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  function decrementCartItemQuantity(itemId) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  }
  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        getCartItemCount,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
