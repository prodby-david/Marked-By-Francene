export interface ReservationFormData {
  selectedService: number | null; 
  selectedTime: string | null;
  paymentMethod: number | null;   
  location: string;
  contactNumber: string;
  theme: string;
  date: string;
  time: string;
  notes: string;
}