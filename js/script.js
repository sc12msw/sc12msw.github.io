// Meal Plan Data - Loaded from external JSON file
let mealPlanData = {};

// Load meal plan data from JSON file
async function loadMealPlanData() {
  try {
    const response = await fetch('data/meal-plan.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    mealPlanData = await response.json();
    return true;
  } catch (error) {
    console.error('Error loading meal plan data:', error);
    // Fallback to embedded data if external file fails
    mealPlanData = {
      "diet_plan_name": "Paleo Meal Plan (Gluten, Egg, Dairy, Yeast-Free)",
      "daily_calorie_target": 1600,
      "notes": "This meal plan is designed for a Paleo lifestyle, excluding gluten, eggs, dairy, and yeast. Ensure all processed items like sausages, broths, and coconut yogurt are certified free of gluten and other non-compliant ingredients. Drink plenty of water throughout the day.",
      "meal_plan": {},
      "shopping_list": {}
    };
    return false;
  }
}

// Utility Functions
function getDayName(dayKey) {
  const dayNames = {
    'monday': 'Monday',
    'tuesday': 'Tuesday', 
    'wednesday': 'Wednesday',
    'thursday': 'Thursday',
    'friday': 'Friday',
    'saturday': 'Saturday',
    'sunday': 'Sunday'
  };
  return dayNames[dayKey] || dayKey;
}

function getTodayDayKey() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[new Date().getDay()];
}

function getMealIcon(mealType) {
  const icons = {
    'breakfast': 'fas fa-sun',
    'lunch': 'fas fa-utensils',
    'dinner': 'fas fa-moon'
  };
  return icons[mealType] || 'fas fa-utensils';
}

// Tab Functionality
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Remove active class from all tabs and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// Modal Functionality
function initModal() {
  const modal = document.getElementById('meal-modal');
  const closeBtn = document.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function showMealModal(dayKey, mealType, meal) {
  const modal = document.getElementById('meal-modal');
  const modalContent = document.getElementById('modal-content');
  
  const mealTypeName = mealType.charAt(0).toUpperCase() + mealType.slice(1);
  const dayName = getDayName(dayKey);
  
  // Use ingredients array if available, otherwise show message
  const ingredients = meal.ingredients || ['Ingredients are listed in the recipe instructions below'];
  
  modalContent.innerHTML = `
    <h2>${meal.name}</h2>
    <div class="meal-type">${mealTypeName} - ${dayName}</div>
    <div class="calories">${meal.calories} calories</div>
    
    <div class="ingredients-section">
      <h3>Ingredients</h3>
      <ul class="ingredients-list">
        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
    </div>
    
    <div class="recipe-section">
      <h3>Instructions</h3>
      <div class="recipe">${meal.recipe}</div>
    </div>
  `;
  
  modal.style.display = 'block';
}

// Extract ingredients from recipe text
function extractIngredients(recipe) {
  // For now, return a simple message since regex parsing is unreliable
  // In a real app, ingredients would be stored separately in the JSON
  return ['Ingredients are listed in the recipe instructions below'];
}

// Render Today's Meals
function renderTodayMeals() {
  const todayMealsContainer = document.getElementById('today-meals');
  const todayDayKey = getTodayDayKey();
  const todayData = mealPlanData.meal_plan[todayDayKey];
  
  if (!todayData) {
    todayMealsContainer.innerHTML = '<p>No meal plan available for today.</p>';
    return;
  }
  
  const meals = ['breakfast', 'lunch', 'dinner'];
  let mealsHTML = '';
  
  meals.forEach(mealType => {
    const meal = todayData[mealType];
    if (meal) {
      mealsHTML += `
        <div class="meal-card" onclick="showMealModal('${todayDayKey}', '${mealType}', ${JSON.stringify(meal).replace(/"/g, '&quot;')})">
          <h3>
            <i class="${getMealIcon(mealType)}"></i>
            ${meal.name}
          </h3>
          <div class="meal-type">${mealType.charAt(0).toUpperCase() + mealType.slice(1)}</div>
          <div class="calories">${meal.calories} calories</div>
        </div>
      `;
    }
  });
  
  todayMealsContainer.innerHTML = mealsHTML;
}

// Render Weekly Plan
function renderWeeklyPlan() {
  const daysGrid = document.getElementById('days-grid');
  const todayDayKey = getTodayDayKey();
  
  let daysHTML = '';
  
  Object.keys(mealPlanData.meal_plan).forEach(dayKey => {
    const dayData = mealPlanData.meal_plan[dayKey];
    const isToday = dayKey === todayDayKey;
    
    let mealsSummaryHTML = '';
    const meals = ['breakfast', 'lunch', 'dinner'];
    
    meals.forEach(mealType => {
      const meal = dayData[mealType];
      if (meal) {
        mealsSummaryHTML += `
          <div class="meal-summary" onclick="showMealModal('${dayKey}', '${mealType}', ${JSON.stringify(meal).replace(/"/g, '&quot;')})">
            <span class="meal-name">${meal.name}</span>
            <span class="meal-calories">${meal.calories} cal</span>
          </div>
        `;
      }
    });
    
    daysHTML += `
      <div class="day-card ${isToday ? 'today' : ''}" onclick="showDayDetails('${dayKey}')">
        <h3>${getDayName(dayKey)}</h3>
        <div class="meals-summary">
          ${mealsSummaryHTML}
        </div>
        <div class="day-total">${dayData.daily_total_calories} total calories</div>
      </div>
    `;
  });
  
  daysGrid.innerHTML = daysHTML;
}

// Render Shopping List
function renderShoppingList() {
  const shoppingCategories = document.getElementById('shopping-categories');
  
  let categoriesHTML = '';
  
  Object.keys(mealPlanData.shopping_list).forEach(category => {
    const items = mealPlanData.shopping_list[category];
    const categoryName = category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    let itemsHTML = '';
    items.forEach(item => {
      itemsHTML += `
        <div class="shopping-item">
          <span class="item-name">${item.item}</span>
          <span class="item-quantity">${item.quantity}</span>
        </div>
      `;
    });
    
    const categoryIcon = getCategoryIcon(category);
    
    categoriesHTML += `
      <div class="shopping-category">
        <h3 class="category-title">
          <i class="${categoryIcon}"></i>
          ${categoryName}
        </h3>
        <div class="shopping-items">
          ${itemsHTML}
        </div>
      </div>
    `;
  });
  
  shoppingCategories.innerHTML = categoriesHTML;
}

function getCategoryIcon(category) {
  const icons = {
    'produce': 'fas fa-carrot',
    'protein': 'fas fa-drumstick-bite',
    'pantry': 'fas fa-warehouse',
    'fats_and_oils': 'fas fa-oil-can',
    'spices_and_seasonings': 'fas fa-mortar-pestle'
  };
  return icons[category] || 'fas fa-shopping-basket';
}

// Show Day Details (for future enhancement)
function showDayDetails(dayKey) {
  // This could open a modal with full day details
  console.log('Show details for:', dayKey);
}

// Initialize the application
async function init() {
  initTabs();
  initModal();
  
  // Show loading state
  showLoading();
  
  // Load meal plan data
  await loadMealPlanData();
  
  // Render the application
  renderTodayMeals();
  renderWeeklyPlan();
  renderShoppingList();
  
  // Hide loading state
  hideLoading();
}

// Show loading state
function showLoading() {
  const todayMeals = document.getElementById('today-meals');
  const daysGrid = document.getElementById('days-grid');
  const shoppingCategories = document.getElementById('shopping-categories');
  
  const loadingHTML = '<div class="loading"><div class="spinner"></div></div>';
  
  if (todayMeals) todayMeals.innerHTML = loadingHTML;
  if (daysGrid) daysGrid.innerHTML = loadingHTML;
  if (shoppingCategories) shoppingCategories.innerHTML = loadingHTML;
}

// Hide loading state
function hideLoading() {
  // Loading state is replaced when content is rendered
}

// Load the application when DOM is ready
document.addEventListener('DOMContentLoaded', init); 