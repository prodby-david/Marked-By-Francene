"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useBookingForm } from "@/features/reservations/hooks/useBookingForm";
import { ThemeStep, DateTimeStep, EventDetailsStep, PaymentStep, BookingSummary } from "@/features/reservations/components";


export default function ReservationPage() {
  
  const { state, calculations, actions } = useBookingForm();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-10">
          <Link href="/dashboard" className="text-sm text-label-color hover:text-heading-color flex items-center gap-1 mb-2 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-heading-color tracking-tight">Complete Your Booking</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-10">

            <ThemeStep 
              selectedId={state.selectedThemeId} 
              onSelectTheme={actions.setSelectedThemeId} 
              formatPrice={actions.formatPrice} 
            />

            <DateTimeStep 
              selectedDate={state.selectedDate}
              selectedTime={state.selectedTime}
              onDateChange={actions.setSelectedDate}
              onTimeSelect={actions.setSelectedTime}
            />

            <EventDetailsStep 
              values={state.form} 
              onChange={actions.updateField} 
            />

            <PaymentStep 
              selectedMethod={state.paymentMethod} 
              onSelect={actions.setPaymentMethod} 
            />
            
          </div>

          <aside className="lg:col-span-4">
            <BookingSummary 
              state={state} 
              calculations={calculations} 
              actions={actions} 
            />
          </aside>

        </div>
      </div>
    </div>
  );
}