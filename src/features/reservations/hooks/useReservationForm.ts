import { useState, useRef, useEffect } from "react";
import { useCreateReservation, ReservationType } from "@/features/reservations/index";


export function useReservationForm() {

    const { createReservation } = useCreateReservation();
    const [error, setError] = useState<string | null>(null);

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
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showCalendar]);

    const [form, setForm] = useState<Omit<ReservationType, 'id' | 'createdAt'>>({
        lastname: "",
        firstname: "",
        location: "",
        contactNumber: "",
        email: "",
        theme: "",
        date: "",
        time: ""
        
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        }); 
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            await createReservation(form);  
        } catch (err : any) {
            setError(err.message || "Something went wrong");
        }
    }

    return {
        form,
        handleChange,
        handleSubmit,
        showCalendar,
        setShowCalendar,
        calendarRef,
    }
}