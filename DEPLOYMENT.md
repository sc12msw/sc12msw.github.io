# Deployment Guide

## Quick Setup for GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `paleo-meal-plan`)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from this folder:
   - `index.html`
   - `README.md`
   - `css/` folder
   - `js/` folder
   - `data/` folder
   - `.github/` folder
3. Add a commit message: "Initial commit"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Clone this repository to your local machine
git clone <this-repo-url>
cd <repo-name>

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch (or "master" if that's what you have)
6. Click "Save"

### Step 4: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- You'll see a green checkmark when it's ready
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Updating Your Meal Plan

### Method 1: Edit via GitHub Web Interface
1. Go to your repository on GitHub
2. Navigate to `data/meal-plan.json`
3. Click the pencil icon to edit
4. Make your changes
5. Commit the changes
6. Your site will automatically update in 1-2 minutes

### Method 2: Edit Locally and Push
1. Edit `data/meal-plan.json` on your computer
2. Push changes to GitHub:
   ```bash
   git add data/meal-plan.json
   git commit -m "Update meal plan"
   git push
   ```

## Customization

### Changing Colors
Edit `css/styles.css` and modify these color values:
- Primary blue: `#2c5aa0`
- Accent green: `#10b981`
- Background: `#f8f9fa`

### Changing the Title
Edit `index.html` and update:
- The `<title>` tag
- The logo text in the header
- The subtitle text

### Adding New Meal Plans
1. Edit `data/meal-plan.json`
2. Follow the existing structure
3. Add new days or modify existing ones
4. Update the shopping list accordingly

## Troubleshooting

### Site Not Loading
- Check that your repository is **public**
- Ensure you selected the correct branch in GitHub Pages settings
- Wait 2-3 minutes for the initial deployment

### Changes Not Appearing
- Clear your browser cache
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check the "Actions" tab in your repository for deployment status

### JSON Errors
- Validate your JSON at [jsonlint.com](https://jsonlint.com)
- Check browser console for JavaScript errors
- Ensure all quotes and brackets are properly closed

## Advanced Features

### Custom Domain (Optional)
1. Buy a domain name
2. In GitHub Pages settings, add your custom domain
3. Configure DNS settings with your domain provider
4. Add a `CNAME` file to your repository

### Analytics (Optional)
Add Google Analytics by editing `index.html` and adding the tracking code in the `<head>` section.

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your JSON syntax
3. Ensure all files are properly uploaded
4. Check GitHub Pages deployment status in the Actions tab

---

*Your meal plan will be live and accessible from any device! 🎉* 