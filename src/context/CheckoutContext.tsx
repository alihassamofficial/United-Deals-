"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  address: string;
  phone: string;
}

interface ShippingSelection {
  id: string;
  title: string;
  delivery: string;
  cost: number;
  insuranceAvailable: boolean;
}

interface PaymentSelection {
  id: string;
  title: string;
  description: string;
}

interface CheckoutContextType {
  // Customer info
  customerInfo: CheckoutFormData;
  updateCustomerInfo: (data: Partial<CheckoutFormData>) => void;

  // Shipping info
  selectedShipping: ShippingSelection | null;
  selectShipping: (shipping: ShippingSelection) => void;

  // Payment info
  selectedPayment: PaymentSelection | null;
  selectPayment: (payment: PaymentSelection) => void;

  // Checkout reset
  clearCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customerInfo, setCustomerInfo] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    phone: "",
  });

  const [selectedShipping, setSelectedShipping] =
    useState<ShippingSelection | null>(null);
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentSelection | null>(null);

  /**
   * 🚀 Load saved data from localStorage
   */
  useEffect(() => {
    // only save if context is hydrated (to avoid overwriting early)
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "checkoutData",
        JSON.stringify({ customerInfo, selectedShipping, selectedPayment })
      );
    }
  }, [customerInfo, selectedShipping, selectedPayment]);
  /**
   * 💾 Persist to localStorage on changes
   */
  useEffect(() => {
    localStorage.setItem(
      "checkoutData",
      JSON.stringify({ customerInfo, selectedShipping, selectedPayment })
    );
  }, [customerInfo, selectedShipping, selectedPayment]);

  /**
   * 🧾 Update customer info fields
   */
  const updateCustomerInfo = (data: Partial<CheckoutFormData>) => {
    setCustomerInfo((prev) => ({ ...prev, ...data }));
  };

  /**
   * 🚚 Select shipping option
   */
  const selectShipping = (shipping: ShippingSelection) => {
    setSelectedShipping(shipping);
  };

  /**
   * 💳 Select payment option
   */
  const selectPayment = (payment: PaymentSelection) => {
    setSelectedPayment(payment);
  };

  /**
   * 🔄 Reset checkout data
   */
  const clearCheckout = () => {
    setCustomerInfo({
      email: "",
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      address: "",
      phone: "",
    });
    setSelectedShipping(null);
    setSelectedPayment(null);
    localStorage.removeItem("checkoutData");
  };

  return (
    <CheckoutContext.Provider
      value={{
        customerInfo,
        updateCustomerInfo,
        selectedShipping,
        selectShipping,
        selectedPayment,
        selectPayment,
        clearCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

/**
 * 🪄 Hook for consuming checkout data
 */
export const useCheckout = (): CheckoutContextType => {
  const context = useContext(CheckoutContext);
  if (!context)
    throw new Error("useCheckout must be used within a CheckoutProvider");
  return context;
};
