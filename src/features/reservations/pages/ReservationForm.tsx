'use client'

import { useReservationForm } from "../hooks/useReservationForm"
import { ReservationFormUI } from "../components/ReservationFormUI"

export default function ReservationForm() {

    const { form, handleChange, handleSubmit, showCalendar, setShowCalendar, calendarRef } = useReservationForm();

    return (
        <ReservationFormUI 
        form={form} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        showCalendar={showCalendar}
        setShowCalendar={setShowCalendar}
        calendarRef={calendarRef}
        />
    )

}