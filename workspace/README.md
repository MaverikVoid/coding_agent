# Portfolio Website

## Project Overview

This is a responsive portfolio website built using HTML, CSS, and JavaScript. The website showcases professional work, skills, and contact information in a modern, mobile-friendly design.

## Project Structure


portfolio-website/
│
├── index.html              # Main homepage
├── about.html              # About page with personal information
├── projects.html           # Projects showcase page
├── contact.html            # Contact form and information page
│
├── css/
│   ├── styles.css          # Main styling file
│   └── responsive.css      # Responsive design and media queries
│
├── js/
│   ├── main.js             # Main JavaScript for interactivity
│   └── animations.js       # Animations and transitions
│
├── images/
│   ├── logo.png            # Website logo
│   ├── hero-bg.jpg         # Hero section background
│   └── profile.jpg         # Profile picture for about page
│
├── assets/
│   └── resume.pdf          # Downloadable resume
│
└── projects/
    ├── project1.html       # Detailed view for project 1
    └── project2.html       # Detailed view for project 2


## Features

- **Fully Responsive Design**: Adapts to all screen sizes (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Interactive Elements**: JavaScript-powered interactivity
- **Project Showcase**: Dedicated pages for detailed project descriptions
- **Contact Form**: Functional contact form for visitor inquiries
- **Downloadable Resume**: Easy access to professional resume

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone or Download the Project**
   - Download the project files to your local machine
   - Extract the files if downloaded as a zip archive

2. **Open the Project**
   - Navigate to the `portfolio-website` folder
   - Open `index.html` in your web browser to view the homepage

3. **Customize Content**
   - Replace placeholder images in the `images/` folder with your own
   - Update text content in HTML files to reflect your information
   - Modify styling in CSS files to match your preferred design
   - Replace `assets/resume.pdf` with your actual resume

4. **Test Responsiveness**
   - Use browser developer tools to test different screen sizes
   - Test on actual mobile devices if possible

## File Descriptions

### HTML Files
- **index.html**: Main landing page with hero section and featured work
- **about.html**: Personal biography, skills, and experience
- **projects.html**: Grid layout showcasing all projects with brief descriptions
- **contact.html**: Contact form, social media links, and contact information
- **projects/project1.html & project2.html**: Detailed project pages with images, descriptions, and technologies used

### CSS Files
- **styles.css**: Core styling including typography, colors, layout, and component styles
- **responsive.css**: Media queries and responsive adjustments for different screen sizes

### JavaScript Files
- **main.js**: Navigation functionality, form validation, and interactive features
- **animations.js**: Scroll animations, hover effects, and page transitions

### Assets
- **images/**: All visual assets including logo, background images, and profile picture
- **assets/**: Additional files like downloadable resume

## Customization Guide

### Changing Colors
Edit the CSS variables in `styles.css` (look for `:root` selector) to change the color scheme.

### Updating Projects
1. Add new project HTML files in the `projects/` folder
2. Update `projects.html` to include links to new projects
3. Add corresponding images to the `images/` folder

### Modifying Layout
- Adjust grid/flexbox properties in `styles.css` for different layouts
- Modify breakpoints in `responsive.css` for custom responsive behavior

### Adding Animations
- Add new animation functions in `animations.js`
- Reference these animations in your HTML elements

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

To deploy this website:

1. **Traditional Hosting**
   - Upload all files to your web hosting server via FTP
   - Ensure file structure is maintained

2. **GitHub Pages**
   - Push the project to a GitHub repository
   - Enable GitHub Pages in repository settings
   - Select the main branch as source

3. **Netlify/Vercel**
   - Drag and drop the project folder to Netlify
   - Or connect your GitHub repository for continuous deployment

## Troubleshooting

### Images Not Loading
- Check file paths in HTML/CSS files
- Ensure image files are in the correct directory
- Verify file extensions are correct

### Responsive Issues
- Check browser console for CSS errors
- Verify media queries in `responsive.css` are properly structured
- Test with browser developer tools

### JavaScript Errors
- Open browser console (F12) to see error messages
- Check for missing semicolons or syntax errors
- Ensure JavaScript files are properly linked in HTML

## Contributing

This is a personal portfolio template. Feel free to fork and modify for your own use. If you find bugs or have suggestions for improvements, please create an issue or pull request.

## License

This project is open source and available for personal and commercial use. Attribution is appreciated but not