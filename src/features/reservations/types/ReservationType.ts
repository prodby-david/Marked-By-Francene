export interface ReservationType {
    id: string,
    lastname: string,
    firstname: string,
    location: string,
    contactNumber: string,
    email: string,
    theme: string,
    date: string,
    time: string
    notes? : string | null,
    createdAt: Date,
}