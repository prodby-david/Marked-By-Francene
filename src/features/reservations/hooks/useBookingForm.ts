"use client";

import { useState } from "react";
import { themes } from "../data/bookingData";
import { ReservationClientServices } from "../services/reservation.client";
import { useRouter } from "next/navigation";
import { paymentMethods } from "../data/bookingData";

export function useBookingForm() {
  const router = useRouter();

  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const [form, setForm] = useState({
    location: "",
    contactNumber: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedTheme = themes.find(t => t.id === selectedThemeId);
  const total = selectedTheme?.price ?? 0;
  const downpayment = total * 0.5;
  const balance = total - downpayment;

  const isFormValid =
  !!selectedThemeId &&
  !!selectedTime &&
  !!paymentMethod &&
  paymentMethods.some(
    m => m.id === paymentMethod && m.available
  ) &&
  !!form.location &&
  !!form.contactNumber;


  const updateField = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const formatPrice = (amount: number) =>
    `₱${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        location: form.location,
        contactNumber: form.contactNumber,
        theme: selectedTheme?.title ?? "",
        date: selectedDate.toISOString().split("T")[0],
        time: selectedTime!,
        notes: form.notes,
        paymentMethod,          
        downpaymentAmount: downpayment,
      };

      await ReservationClientServices.createReservation(payload);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Booking failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state: {
      selectedThemeId,
      selectedTime,
      selectedDate,
      paymentMethod,
      form,
      isFormValid,
      isSubmitting,
      error,
    },
    calculations: {
      selectedTheme,
      total,
      downpayment,
      balance,
    },
    actions: {
      setSelectedThemeId,
      setSelectedTime,
      setSelectedDate,
      setPaymentMethod,   
      updateField,
      formatPrice,
      handleSubmit,
    },
  };
}
