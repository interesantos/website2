'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  isSubscription?: boolean;
  subscriptionFrequency?: 'weekly' | 'bi-weekly' | 'monthly';
};

type CartContextType = {
  cartItems: CartItem[];
  clickedItems: string[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: number;
  itemCount: number;
  setClickedItem: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [clickedItems, setClickedItems] = useState<string[]>([]);

  const setClickedItem = (id: string) => {
    setClickedItems(prev => [...prev, id]);
    // Remove from clicked items if removed from cart
    setTimeout(() => {
      setClickedItems(prev => prev.filter(itemId =>
        cartItems.some(item => item.id === itemId)
      ));
    }, 3000);
  };

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    console.log('Adding to cart:', item);
    
    // Ensure image path is valid
    const validatedItem = {
      ...item,
      image: item.image && !item.image.startsWith('/')
        ? `/${item.image}`
        : item.image || '/images/placeholder-product.jpg'
    };
    
    setCartItems(prevItems => {
      console.log('Previous cart items:', prevItems);
      const existingItem = prevItems.find(i => i.id === validatedItem.id);
      if (existingItem) {
        const updatedItems = prevItems.map(i =>
          i.id === validatedItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        console.log('Updated cart items (existing):', updatedItems);
        return updatedItems;
      }
      const newItems = [...prevItems, { ...validatedItem, quantity: 1 }];
      console.log('Updated cart items (new):', newItems);
      return newItems;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    if (quantity > 100) {
      alert('Maximum quantity per item is 100');
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const itemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        itemCount,
        clickedItems,
        setClickedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
