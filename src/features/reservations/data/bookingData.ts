import { WalletCards, CreditCard, Banknote } from "lucide-react";

export const themes = [
  { id: 1, title: "Bridal Trial", price: 2500, duration: "120 min" },
  { id: 2, title: "Event Glam", price: 1500, duration: "60 min" },
  { id: 3, title: "Photoshoot", price: 3000, duration: "180 min" },
];

export const paymentMethods = [
  { id: "gcash", name: "GCash / E-Wallet", icon: WalletCards, description: "Instant transfer", available: true },
  { id: "maya", name: "Maya / E-Wallet", icon: WalletCards, description: "Instant transfer", available: true },
  { id: "card", name: "Credit / Debit Card", icon: CreditCard, description: "Secure checkout", available: false },
  { id: "bank", name: "Bank Transfer", icon: Banknote, description: "Upload receipt", available: false }, 
];