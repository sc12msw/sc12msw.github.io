# Paleo Meal Plan Webpage

A beautiful, mobile-first meal plan webpage designed for a Paleo lifestyle, excluding gluten, eggs, dairy, and yeast. Built with modern web technologies and inspired by Marks and Spencer branding.

## Features

- **Today's Meals Highlight**: Automatically displays today's meals prominently
- **Weekly Meal Plan**: Easy-to-navigate weekly view with all meals
- **Shopping List**: Organized by categories (produce, protein, pantry, etc.)
- **Mobile-First Design**: Responsive design that works perfectly on all devices
- **Recipe Details**: Click any meal to see full recipe instructions
- **Dynamic Data**: Easy to update meal plans by editing the JSON file

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **View your meal plan** - today's meals are automatically highlighted

## Updating Meal Plans

To update your meal plans, simply edit the `data/meal-plan.json` file. The webpage will automatically load the new data when refreshed.

### JSON Structure

The meal plan follows this structure:

```json
{
  "diet_plan_name": "Your Diet Plan Name",
  "daily_calorie_target": 1600,
  "notes": "Additional notes about the meal plan",
  "meal_plan": {
    "monday": {
      "daily_total_calories": 1490,
      "breakfast": {
        "name": "Meal Name",
        "calories": 420,
        "recipe": "Full recipe instructions..."
      },
      "lunch": { ... },
      "dinner": { ... }
    }
  },
  "shopping_list": {
    "produce": [
      { "item": "Item Name", "quantity": "Quantity" }
    ]
  }
}
```

## Deployment on GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select source**: "Deploy from a branch"
5. **Choose branch**: `main` (or `master`)
6. **Save** - your site will be available at `https://yourusername.github.io/repository-name`

## File Structure

```
├── index.html              # Main webpage
├── css/
│   └── styles.css          # Styling (M&S inspired)
├── js/
│   └── script.js           # JavaScript functionality
├── data/
│   └── meal-plan.json      # Meal plan data (easy to update)
└── README.md               # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
The color scheme can be modified in `css/styles.css`:
- Primary blue: `#2c5aa0`
- Accent green: `#10b981`
- Background: `#f8f9fa`

### Fonts
The webpage uses Inter font family, which can be changed in the CSS file.

## Features in Detail

### Today's Meals Section
- Automatically detects the current day
- Displays breakfast, lunch, and dinner prominently
- Click any meal to see the full recipe

### Weekly Plan
- Grid layout showing all days of the week
- Today's day is highlighted with a special border
- Each day shows meal summaries with calorie counts
- Click any meal to see the full recipe

### Shopping List
- Organized by categories (produce, protein, pantry, etc.)
- Each category has an appropriate icon
- Items show both name and quantity
- Easy to scan and use while shopping

### Responsive Design
- Mobile-first approach
- Works perfectly on phones, tablets, and desktops
- Touch-friendly interface
- Optimized for one-handed use on mobile

## Technical Details

- **No build process required** - pure HTML, CSS, and JavaScript
- **No external dependencies** (except Font Awesome for icons)
- **Fast loading** - minimal file sizes
- **SEO friendly** - semantic HTML structure
- **Accessible** - proper ARIA labels and keyboard navigation

## Support

If you encounter any issues or have questions about customizing the meal plan, please check the JSON structure or refer to the browser's developer console for error messages.

---

*Built with ❤️ for healthy eating and easy meal planning* 
