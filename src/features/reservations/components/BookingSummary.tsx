"use client";

import { Info, Loader2, AlertCircle } from "lucide-react";

export default function BookingSummary({ state, calculations, actions }: any) {
  // FIX: Format the Date object into a clean string
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short', 
      month: 'short',   
      day: 'numeric',  
      year: 'numeric'  
    });
  };

  return (
    <div className="sticky top-8 bg-white rounded-xl border border-input-color shadow-sm p-6">
      <h3 className="font-bold text-heading-color mb-4">Booking Summary</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-label-color">Theme</span>
          <span className="font-medium text-heading-color text-right">
            {calculations.selectedTheme?.title || "Select a theme"}
          </span>
        </div>
        
        <div className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-label-color">When</span>
          <span className="font-medium text-heading-color text-right">
            {/* APPLY THE FORMATTER HERE */}
            {state.selectedTime 
              ? `${formatDate(state.selectedDate)} • ${state.selectedTime}` 
              : "--"}
          </span>
        </div>

        <div className="flex justify-between py-3 border-b border-gray-100">
          <span className="text-label-color">Where</span>
          <span className="font-medium text-heading-color text-right truncate max-w-[150px]">
            {state.form.location || "--"}
          </span>
        </div>

        <div className="pt-3 space-y-2 text-heading-color">
           <div className="flex justify-between items-center font-bold">
              <span className="text-xs uppercase tracking-wider">Due Now (50%)</span>
              <span className="text-lg">{actions.formatPrice(calculations.downpayment)}</span>
           </div>
           <div className="flex justify-between items-center text-label-color text-xs">
              <span>Balance</span>
              <span>{actions.formatPrice(calculations.balance)}</span>
           </div>
        </div>
      </div>

      {state.error && (
        <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2 text-red-600 text-[11px]">
          <AlertCircle className="w-4 h-4 shrink-0" /> {state.error}
        </div>
      )}

      <button 
        onClick={actions.handleSubmit}
        disabled={!state.isFormValid || state.isSubmitting} 
        className="w-full mt-6 bg-heading-color text-white py-3 rounded-xl font-semibold shadow-sm hover:bg-opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
      >
        {state.isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        {state.isSubmitting ? "Processing..." : `Pay ${actions.formatPrice(calculations.downpayment)}`}
      </button>

      <div className="flex gap-2 items-center mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
         <Info className="w-4 h-4 text-heading-color shrink-0 mt-0.5" />
         <p className="text-xs text-heading-color leading-snug">Verification is instant after payment.</p>
      </div>
    </div>
  );
}