const recommendationButton = document.querySelector("#recommendation-button");
const recommendationDetail = document.querySelector("#recommendation-detail");
const waterButton = document.querySelector("#water-button");
const stopButton = document.querySelector("#stop-button");
const pumpState = document.querySelector("#pump-state");
const pumpNote = document.querySelector("#pump-note");
const historyRows = document.querySelector("#history-rows");

recommendationButton.addEventListener("click", () => {
  const isExpanded = recommendationButton.getAttribute("aria-expanded") === "true";
  recommendationButton.setAttribute("aria-expanded", String(!isExpanded));
  recommendationButton.textContent = isExpanded
    ? "Lihat rekomendasi"
    : "Sembunyikan rekomendasi";
  recommendationDetail.hidden = isExpanded;
});

function addHistoryEntry(eventText, statusText, statusClass) {
  const row = document.createElement("tr");
  const timeCell = document.createElement("td");
  const eventCell = document.createElement("td");
  const statusCell = document.createElement("td");
  const badge = document.createElement("span");

  timeCell.textContent = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  eventCell.textContent = eventText;
  badge.className = `badge ${statusClass}`;
  badge.textContent = statusText;
  statusCell.append(badge);
  row.append(timeCell, eventCell, statusCell);
  historyRows.prepend(row);
}

waterButton.addEventListener("click", () => {
  pumpState.textContent = "Menyiram";
  pumpNote.textContent = "Siram manual sedang berjalan.";
  waterButton.disabled = true;
  stopButton.disabled = false;
  addHistoryEntry("Penyiraman manual dimulai", "Dicatat", "badge--warning");
});

stopButton.addEventListener("click", () => {
  pumpState.textContent = "Mati";
  pumpNote.textContent = "Penyiraman manual dihentikan.";
  waterButton.disabled = false;
  stopButton.disabled = true;
  addHistoryEntry("Pompa dihentikan", "Normal", "badge--normal");
});
