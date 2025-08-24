document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

//ferching events from json file
    fetch("events.json")
    .then(response => response.json())
    .then(events => {
      timeline.innerHTML = "";
       events.forEach(event => {
        const eventEl = document.createElement("article");
        eventEl.classList.add("event");
        eventEl.innerHTML = `
          <h3>${event.year} - ${event.title}</h3>
          <p>${event.description.substring(0, 50)}...</p>`;
          //onclick is used here
          eventEl.addEventListener("click", () => {
          modal.innerHTML = `
            <div class="modal-content">
              <span id="closeModal" style="cursor:pointer;float:right;font-size:20px;">&times;</span>
              <h2>${event.year} - ${event.title}</h2>
              <img src="${event.imageURL}" alt="${event.title}" style="max-width:100%;">
              <p>${event.description}</p>
              <p><strong>Category:</strong> ${event.category}</p>
            </div>
          `;
          modal.style.display = "block";
           document.getElementById("closeModal").addEventListener("click", () => {
            modal.style.display = "none";
          });
        });

        timeline.appendChild(eventEl);
      });
    })
    .catch(err => console.error("Error loading events:", err));
     modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});