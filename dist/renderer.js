import { showModal } from "./modal";
export function renderEvents(events, container) {
    container.innerHTML = "";
    events.forEach(event => {
        const eventEl = document.createElement("article");
        eventEl.classList.add("event");
        eventEl.innerHTML = `
      <h3>${event.year} - ${event.title}</h3>
      <p>${event.description.substring(0, 50)}...</p>
    `;
        eventEl.addEventListener("click", () => showModal(event));
        container.appendChild(eventEl);
    });
}
