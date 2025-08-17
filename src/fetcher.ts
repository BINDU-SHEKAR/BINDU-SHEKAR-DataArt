import { TimelineEvent } from "./types";

export async function fetchEvents(): Promise<TimelineEvent[]> {
  const response = await fetch("events.json");
  if (!response.ok) throw new Error("Failed to fetch events");
  return response.json();
}
