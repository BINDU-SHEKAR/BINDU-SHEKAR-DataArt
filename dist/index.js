"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("events.json");
        if (!response.ok) {
            throw new Error("Failed to fetch events");
        }
        return yield response.json();
    });
}
function renderEvents(events, container) {
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
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const timeline = document.getElementById("timeline");
    try {
        const events = yield fetchEvents();
        console.log("Events fetched:", events);
        renderEvents(events, timeline);
    }
    catch (err) {
        console.error("Error loading events:", err);
        timeline.innerHTML = "<p>Failed to load events.</p>";
    }
}));
