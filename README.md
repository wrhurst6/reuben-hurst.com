# Academic Website - Reuben Hurst

A modern, professional academic website built with HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive**: Fully mobile-friendly and works on all devices
- **Interactive**: Smooth scrolling, animated elements, and hover effects
- **Fast**: Vanilla JavaScript - no heavy frameworks
- **Easy to Deploy**: Ready for GitHub Pages hosting

## Structure

```
academic-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # Interactive functionality
├── images/            # Your images and photos
└── README.md          # This file
```

## Customization

### Update Your Information

1. **Personal Details** (index.html):
   - Update name, title, and affiliation in the hero section
   - Update email address in the contact section
   - Update office location if needed

2. **Research Areas** (index.html):
   - Modify the research cards in the research section
   - Add or remove research areas as needed

3. **Publications** (index.html):
   - Add your working papers and publications
   - Update the publication entries with your work

### Add Your Photo

1. Place your photo in the `images/` folder (e.g., `profile.jpg`)
2. You can add it to the About section by adding this HTML:

```html
<div class="about-image">
    <img src="images/profile.jpg" alt="Reuben Hurst">
</div>
```

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;    /* Accent blue */
    --accent-color: #e74c3c;       /* Highlight red */
}
```

### Change the Hero Gradient

In `css/style.css`, find `.hero` and update:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these alternatives:
- Blue: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Green: `linear-gradient(135deg, #11998e 0%, #38ef7d 100%)`
- Orange: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- Dark: `linear-gradient(135deg, #2c3e50 0%, #3498db 100%)`

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to GitHub and create a new repository
2. Name it: `<your-username>.github.io` (e.g., `reubenhurst.github.io`)
3. Make it public
4. Don't initialize with README (we already have one)

### Step 2: Initialize Git and Push

Open Terminal in the `academic-website` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Academic website"

# Add your GitHub repository as remote
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**

Your site will be live at: `https://<your-username>.github.io/`

### Step 4: Custom Domain (Optional)

If you want to use a custom domain (e.g., `reubenhurst.com`):

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. In your repository, create a file named `CNAME` with your domain:
   ```
   reubenhurst.com
   ```
3. Configure your domain's DNS settings:
   - Add an **A record** pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a **CNAME record** pointing to `<your-username>.github.io`

## Testing Locally

To test your website locally before deploying:

### Option 1: Python Simple Server

```bash
cd academic-website
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Updates and Maintenance

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Your site will automatically update within a few minutes!

## Adding a CV/Resume

1. Place your CV PDF in the root folder: `cv.pdf`
2. The "Download CV" button in the About section will link to it automatically
3. Or update the link in `index.html` if you name it differently

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance:
- No external dependencies except Google Fonts
- Minimal JavaScript
- Optimized CSS
- Lazy loading for images (if you add them)

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- HTML/CSS Resources: https://developer.mozilla.org/
- Contact: Update your contact info in the website!

## License

Feel free to use this template for your own academic website!
