export function formatPrice(amount: number): string {
  return `₱${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
}

export function calculatePricing(totalPrice: number) {
  const downpayment = totalPrice * 0.5;
  const balance = totalPrice - downpayment;
  return { downpayment, balance };
}