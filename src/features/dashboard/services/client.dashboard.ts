import { formatPHDate, formatPHTime } from "@/shared/lib/datetime";

export function getDisplayDate(date: Date) {
  return formatPHDate(date);
}

export function getDisplayTime(date: Date) {
  return formatPHTime(date);
}
