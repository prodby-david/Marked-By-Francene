import { useState, useRef, useEffect } from "react";
import { useCreateReservation, ReservationFormInput} from "@/features/reservations/index";


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

    const [form, setForm] = useState<Omit<ReservationFormInput, 'id' | 'createdAt'>>({
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

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); 

    // Validate frontend
    const { location, contactNumber, theme, date, time } = form;
    if (!location || !contactNumber || !theme || !date || !time) {
        setError("All fields are required");
        return;
    }

    try {
        const res = await createReservation(form);
        console.log("Reservation created:", res);
        alert("Reservation created successfully!");
    } catch (err: any) {
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