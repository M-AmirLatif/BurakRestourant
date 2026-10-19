"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { BUSINESS_INFO } from "@/data/menuData";

export interface CartItem {
  id: string; // unique item id + size, e.g. "pizza-tikka-M"
  menuItemId: string;
  name: string;
  sizeLabel?: string;
  sizeName?: string;
  price: number;
  quantity: number;
  image: string;
  isDeal?: boolean;
}

export type OrderType = "delivery" | "takeaway" | "dinein";

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  deliveryFee: number;
  isFreeDelivery: boolean;
  amountNeededForFreeDelivery: number;
  totalPayable: number;
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerAddress: string;
  setCustomerAddress: (address: string) => void;
  customerPhone: string;
  setCustomerPhone: (phone: string) => void;
  orderNotes: string;
  setOrderNotes: (notes: string) => void;
  triggerCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "burak_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // ignore
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, isHydrated]);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });

    // Delightful micro-interaction
    try {
      confetti({
        particleCount: 28,
        spread: 45,
        origin: { y: 0.85, x: 0.88 },
        colors: ["#DC2626", "#F59E0B", "#10B981"],
      });
    } catch {
      // ignore
    }
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const freeDeliveryThreshold = BUSINESS_INFO.minFreeDelivery;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold || orderType !== "delivery";
  const deliveryFee = orderType === "delivery" && subtotal > 0 && subtotal < freeDeliveryThreshold ? 100 : 0;
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const totalPayable = subtotal + deliveryFee;

  const getWhatsAppOrderUrl = () => {
    let text = `🔥 *NEW ORDER — BURAK CRISPY JUICY LEGENDARY* 🔥\n`;
    text += `_"${BUSINESS_INFO.tagline}"_\n`;
    text += `📍 Near Railway Crossing (Phatak), Kasur\n`;
    text += `----------------------------------------\n`;
    text += `🍽️ *Order Type*: ${orderType.toUpperCase()}\n`;
    if (customerName.trim()) text += `👤 *Customer*: ${customerName.trim()}\n`;
    if (customerPhone.trim()) text += `📞 *Phone*: ${customerPhone.trim()}\n`;
    if (orderType === "delivery" && customerAddress.trim()) {
      text += `🏠 *Delivery Address*: ${customerAddress.trim()}\n`;
    }
    text += `\n🛒 *ITEMS ORDERED*:\n`;

    items.forEach((item, index) => {
      const sizeStr = item.sizeName ? ` (${item.sizeName})` : "";
      text += `${index + 1}. *${item.name}*${sizeStr}\n`;
      text += `   Qty: ${item.quantity} × Rs ${item.price} = *Rs ${item.price * item.quantity}*\n`;
    });

    text += `----------------------------------------\n`;
    text += `💰 *Subtotal*: Rs ${subtotal.toLocaleString()}\n`;
    if (orderType === "delivery") {
      text += `🚚 *Delivery*: ${isFreeDelivery ? "FREE (Orders Rs 1000+)" : `Rs ${deliveryFee}`}\n`;
    }
    text += `🔥 *TOTAL PAYABLE*: *Rs ${totalPayable.toLocaleString()}*\n`;
    text += `----------------------------------------\n`;

    if (orderNotes.trim()) {
      text += `📝 *Notes*: ${orderNotes.trim()}\n`;
    }

    text += `\nThank you for choosing BURAK Restaurant Kasur! Please confirm receipt of my order.`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
  };

  const triggerCheckout = () => {
    if (items.length === 0) return;
    const url = getWhatsAppOrderUrl();
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        deliveryFee,
        isFreeDelivery,
        amountNeededForFreeDelivery,
        totalPayable,
        orderType,
        setOrderType,
        customerName,
        setCustomerName,
        customerAddress,
        setCustomerAddress,
        customerPhone,
        setCustomerPhone,
        orderNotes,
        setOrderNotes,
        triggerCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
