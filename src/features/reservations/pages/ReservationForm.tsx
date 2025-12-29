"use client";

import ReservationFormUI from "../components/ReservationFormUI";
import { useReservationForm } from "../hooks/useReservationForm";
import StatusModal from "@/shared/components/modals/modal";

export default function ReservationForm() {
  const {
    form,
    handleChange,
    handleSubmit,
    showCalendar,
    setShowCalendar,
    calendarRef,
    modal,
    closeModal,
  } = useReservationForm();

  return (
    <>
      <ReservationFormUI
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {modal.open && (
        <StatusModal
          open={modal.open}
          type={modal.type}
          title={modal.title}
          message={modal.message}
          onClose={closeModal}
        />
      )}
    </>
  );
}
