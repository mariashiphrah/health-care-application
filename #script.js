 // Step navigation
function nextStep(step) {
  // hide all steps
  document.querySelectorAll(".step").forEach(el => el.classList.add("hidden"));
  // show current step
  document.getElementById(step${step}).classList.remove("hidden");

  // update progress bullets
  document.querySelectorAll(".bullet").forEach((b, i) => {
    if (i < step) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
}

// Meal Planner Logic
document.addEventListener("DOMContentLoaded", () => {
  const dietForm = document.getElementById("dietForm");
  const mealPlan = document.getElementById("mealPlan");

  if (dietForm) {
    dietForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const dietType = document.getElementById("dietType").value;
      const mealType = document.getElementById("mealType").value;
      const healthIssues = document.getElementById("healthIssues").value.toLowerCase();

      let plan = "";

      // Simple meal suggestions
      if (dietType === "vegetarian" && mealType === "breakfast") {
        plan = "Oats with fruits + almonds";
      } else if (dietType === "nonveg" && mealType === "lunch") {
        plan = "Grilled chicken + brown rice + veggies";
      } else if (dietType === "vegan" && mealType === "dinner") {
        plan = "Quinoa + lentils + mixed greens";
      } else {
        plan = "Whole grains + protein + vegetables";
      }

      // Add health-specific suggestions
      if (healthIssues.includes("diabetes")) {
        plan += "<br><strong>Note:</strong> Avoid added sugar & refined carbs.";
      }
      if (healthIssues.includes("bp") || healthIssues.includes("blood pressure")) {
        plan += "<br><strong>Note:</strong> Use less salt & processed food.";
      }

      mealPlan.innerHTML = plan;
      nextStep(4); // go to Recommended Meal step
    });
  }
});