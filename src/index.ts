interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: string;
  imageURL: string;
}

async function fetchEvents(): Promise<TimelineEvent[]> {
  const response = await fetch("events.json");
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return await response.json();
}

function renderEvents(events: TimelineEvent[], container: HTMLElement): void {
  container.innerHTML = ""; // Clear previous content

  events.forEach(event => {
    const eventEl = document.createElement("article");
    eventEl.classList.add("event");
    eventEl.innerHTML = `
      <h3>${event.year} - ${event.title}</h3>
      <p>${event.description}</p>
      <img src="${event.imageURL}" alt="${event.title}" />
    `;
    container.appendChild(eventEl);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const timeline = document.getElementById("timeline")!;
  try {
    const events = await fetchEvents();
    console.log("Events fetched:", events);
    renderEvents(events, timeline);
  } catch (err) {
    console.error("Error loading events:", err);
    timeline.innerHTML = "<p>Failed to load events.</p>";
  }
});
