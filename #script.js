// ===== Function to switch between pages =====
function showPage(pageId) {
  // Hide all sections
  document.querySelectorAll("main section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(pageId).classList.add("active");
}

// ===== Handle Sign Up Form Submission =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Put values into summary section
    document.getElementById("outName").textContent = fullname;
    document.getElementById("outEmail").textContent = email;
    document.getElementById("outPhone").textContent = phone || "N/A";

    // Show the summary page
    showPage("summary");

    // Reset form after submission
    form.reset();
  });
});