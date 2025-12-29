export interface Reservation {
  id: string
  userId: string
  location: string
  contactNumber: string
  theme: string
  dateTime: Date
  notes?: string | null
  createdAt: Date
}

