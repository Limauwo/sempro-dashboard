const alertSummary = document.querySelector("#active-alert");
const alertStatus = document.querySelector("#alert-status");
const alertDescription = document.querySelector("#alert-description");
const alertFeedback = document.querySelector("#alert-feedback");
const pumpAction = document.querySelector("#pump-action");
const resolveAlert = document.querySelector("#resolve-alert");
const alertHistoryRows = document.querySelector("#alert-history-rows");

let pumpIsActive = false;

function addAlertHistory(action) {
  const row = document.createElement("tr");
  const timeCell = document.createElement("td");
  const alertCell = document.createElement("td");
  const actionCell = document.createElement("td");

  timeCell.textContent = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
  alertCell.textContent = "Kelembapan rendah (Waspada)";
  actionCell.textContent = action;
  row.append(timeCell, alertCell, actionCell);
  alertHistoryRows.prepend(row);
}

pumpAction.addEventListener("click", () => {
  pumpIsActive = !pumpIsActive;
  pumpAction.textContent = pumpIsActive ? "Hentikan pompa" : "Aktifkan pompa";
  alertFeedback.textContent = pumpIsActive
    ? "Simulasi: pompa penyiraman diaktifkan."
    : "Simulasi: pompa penyiraman dihentikan.";
  addAlertHistory(pumpIsActive ? "Pompa diaktifkan (demo)" : "Pompa dihentikan (demo)");
});

resolveAlert.addEventListener("click", () => {
  alertSummary.classList.add("is-resolved");
  alertStatus.textContent = "Status: Ditangani";
  alertDescription.textContent =
    "Peringatan ditandai sudah ditangani pada sesi demo ini.";
  alertFeedback.textContent = "Perubahan ini hanya berlaku selama halaman dibuka.";
  resolveAlert.textContent = "Sudah ditangani";
  resolveAlert.disabled = true;
  addAlertHistory("Ditandai sudah ditangani (demo)");
});
