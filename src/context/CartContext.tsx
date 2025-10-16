"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "@/types/product";
import { toast } from "sonner";

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    let toastShown = false;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (p) =>
          p.id === item.id &&
          p.selectedColor === item.selectedColor &&
          p.selectedMemory === item.selectedMemory &&
          p.selectedStorage === item.selectedStorage
      );

      const updated = [...prev];

      if (existingIndex >= 0) {
        updated[existingIndex].quantity += item.quantity;

        if (!toastShown) {
          toast.success("🛒 Quantity updated in cart");
          toastShown = true;
        }
      } else {
        updated.push(item);

        if (!toastShown) {
          toast.success("🛒 Added to cart");
          toastShown = true;
        }
      }

      return updated;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
    toast.info("❌ Removed from cart");
  };

  // ✅ Completely clear cart and checkout data
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy access
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
