const maturityForm = document.querySelector("#maturity-form");
const cancelAssessment = document.querySelector("#cancel-assessment");
const assessmentFeedback = document.querySelector("#assessment-feedback");

maturityForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(maturityForm);
  const batch = formData.get("batch");
  const maturity = formData.get("maturity");
  assessmentFeedback.textContent =
    `Penilaian ${maturity.toLowerCase()} untuk ${batch} dicatat pada sesi demo ini.`;
});

cancelAssessment.addEventListener("click", () => {
  maturityForm.reset();
  assessmentFeedback.textContent = "";
});
