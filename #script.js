 // DOM Elements
const signupForm = document.getElementById('signupForm');
const thankYou = document.getElementById('thankYou');
const nextBtn = document.getElementById('nextBtn');
const dietForm = document.getElementById('dietForm');
const result = document.getElementById('result');
const mealPlan = document.getElementById('mealPlan');

// Handle Sign Up
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  signupForm.classList.add('hidden');
  thankYou.classList.remove('hidden');
});

// Show Diet Form
nextBtn.addEventListener('click', () => {
  thankYou.classList.add('hidden');
  dietForm.classList.remove('hidden');
});

// Handle Diet Form
dietForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const dietType = document.getElementById('dietType').value;
  const mealType = document.getElementById('mealType').value;
  const healthIssues = document.getElementById('healthIssues').value.toLowerCase();

  // Simple meal plan logic
  let plan = '';

  if (dietType === 'veg' && mealType === 'breakfast') {
    plan = 'Oats (50g), Almonds (20g), Banana (100g)';
  } else if (dietType === 'nonveg' && mealType === 'lunch') {
    plan = 'Grilled Chicken (150g), Brown Rice (100g), Salad (50g)';
  } else if (dietType === 'vegan' && mealType === 'dinner') {
    plan = 'Quinoa (100g), Tofu (80g), Steamed Veggies (70g)';
  } else {
    plan = 'Whole grains (100g), Lentils (80g), Fruits (100g)';
  }

  if (healthIssues.includes('diabetes')) {
    plan += '<br><strong>Note:</strong> Low sugar options recommended.';
  }
  if (healthIssues.includes('bp')) {
    plan += '<br><strong>Note:</strong> Low salt intake suggested.';
  }

  mealPlan.innerHTML = plan;
  dietForm.classList.add('hidden');
  result.classList.remove('hidden');
});