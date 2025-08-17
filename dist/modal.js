export function showModal(event) {
    const modal = document.getElementById("modal");
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
}
