export function generateTimeSlots(
  startHour = 6,
  endHour = 18,
  intervalMinutes = 15
): string[] {
  const slots: string[] = [];

  const start = new Date();
  start.setHours(startHour, 0, 0, 0);

  const end = new Date();
  end.setHours(endHour, 0, 0, 0);

  while (start <= end) {
    slots.push(
      start.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );
    start.setMinutes(start.getMinutes() + intervalMinutes);
  }

  return slots;
}
