"use client";

import { useState, useRef, useEffect } from "react";
import { useCreateReservation, ReservationFormInput } from "@/features/reservations/index";

export function useReservationForm() {
  const { createReservation } = useCreateReservation();

  const [modal, setModal] = useState({
    open: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  const closeModal = () => setModal(prev => ({ ...prev, open: false }));

  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  const [form, setForm] = useState<ReservationFormInput>({
    location: "",
    contactNumber: "",
    theme: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: any) => {
    const name = e.target?.name;
    const value = e.target?.value;
    if (!name) return;

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { location, contactNumber, theme, date, time } = form;

    if (!location || !contactNumber || !theme || !date || !time) {
      setModal({
        open: true,
        type: "error",
        title: "Validation Error",
        message: "All fields are required",
      });
      return;
    }

    try {
      await createReservation(form);
      setModal({
        open: true,
        type: "success",
        title: "Success",
        message: "Reservation created successfully",
      });
    } catch (err: any) {
      setModal({
        open: true,
        type: "error",
        title: "Error",
        message: err.message || "Something went wrong",
      });
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    showCalendar,
    setShowCalendar,
    calendarRef,
    modal,
    closeModal,
  };
}
