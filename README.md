# 🏎️ Aman Kumar Sahu - Sports Car Themed Portfolio

A high-performance, visually striking personal portfolio website inspired by premium sports cars (Lamborghini, Ferrari, McLaren). Built with modern web technologies and featuring smooth animations, responsive design, and automatic data fetching.

## 🚀 Features

### 🎨 Design & Style
- **Sports Car Theme**: Inspired by premium sports cars with racing aesthetics
- **Dark Theme**: Sleek dark background with neon accents (red, electric blue, silver)
- **Animations**: Parallax backgrounds, smooth transitions, glowing effects
- **Dashboard UI**: Tachometer skill bars, speedometer loading animations
- **Racing Elements**: Racing lines, speed trails, particle effects

### 📱 Sections
- **Hero Section**: Dynamic sports car animation with racing lines background
- **About/Profile**: Auto-fetched from GitHub, LinkedIn, Instagram, YouTube
- **Skills/Expertise**: Dashboard-style tachometer with skill level indicators
- **Projects**: Automatically fetches all public GitHub repositories
- **Achievements**: Trophy-style UI for certifications and highlights
- **Contact**: Neon styled form with direct contact information

### ⚡ Performance
- **Fast Loading**: Optimized assets and lazy loading
- **Responsive**: Mobile-first design, works on all devices
- **SEO Optimized**: Proper meta tags, sitemap, robots.txt
- **Accessibility**: ARIA labels, keyboard navigation
- **Modern Standards**: HTML5, CSS3, ES6+ JavaScript

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** - Interactive features and API integrations
- **GitHub API** - Automatic project fetching and display
- **Google Fonts** - Orbitron and Roboto fonts
- **Font Awesome** - Icon library for social media and UI elements

## 📁 Project Structure

```
AKS-Portfolio/
├── index.html              # Main HTML file
├── styles.css              # CSS styling with sports car theme
├── app.js                  # JavaScript functionality
├── robots.txt              # SEO robots configuration
├── sitemap.xml             # XML sitemap for SEO
├── assets/                 # Future assets directory
└── README.md              # This documentation file
```

## 🎯 Key Features

### 1. Loading Screen
- Speedometer animation with needle sweep
- "ENGINE STARTING..." text with neon effects
- Smooth transition to main content

### 2. Navigation
- Fixed navbar with scroll effects
- Smooth scrolling to sections
- Mobile hamburger menu
- Active link highlighting

### 3. Hero Section
- Large headline with gradient text
- Racing lines background animation
- Particle system effects
- Speed trail animations
- Scroll indicator with bounce effect

### 4. About Section
- Profile circle with rotating ring
- Auto-fetched GitHub stats (repositories, stars)
- Social media links with hover effects
- Typewriter effect for bio text

### 5. Skills Section
- Interactive tachometer with moving needle
- Skill cards with hover animations
- Performance level indicators
- Tech stack icons and descriptions

### 6. Projects Section
- Automatic GitHub API integration
- Dynamic project cards with tech tags
- Repository links and descriptions
- Language-specific icons (Python, JavaScript, etc.)

### 7. Achievements Section
- Trophy-style achievement cards
- Icon-based achievement display
- Hover effects and animations

### 8. Contact Section
- Neon styled contact form
- Direct contact information display
- Social media links
- Email integration with mailto links

### 9. Footer
- Quote: "Driven by Speed. Built for Precision."
- Copyright information
- Back-to-top button with speed trail effect

## 🔧 Installation & Setup

### Local Development

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd AKS-Portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No build tools or dependencies required

3. **Local Server (Optional)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (with http-server)
   npx http-server
   ```

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to "Pages" section
   - Select source: `main` branch, `/ (root)` folder
   - Save and wait for deployment

## 🌐 Data Sources

The portfolio automatically fetches data from:

- **GitHub**: `https://github.com/aman-kumar-sahu`
  - Public repositories
  - Repository descriptions
  - Programming languages
  - Stars and forks count
  
- **LinkedIn**: `https://www.linkedin.com/in/aman-kumar-sahu-ab57a4276/`
  - Professional achievements
  - Certifications
  - Work experience
  
- **Instagram**: `https://www.instagram.com/aman_sahu0925/`
  - Social highlights
  - Personal content
  
- **YouTube**: `https://www.youtube.com/@AKSVlogs-g7l`
  - Video content
  - Channel information

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --neon-red: #ff2a2a;
    --neon-blue: #00f3ff;
    --neon-green: #00ff88;
    --neon-purple: #b967ff;
    --neon-yellow: #fff700;
}
```

### Content
- Update personal information in `index.html`
- Modify skills in `app.js` `initSkillsSection()` function
- Add custom achievements in `initAchievementsSection()` function

### Animations
- Adjust animation durations in CSS
- Modify JavaScript animation triggers
- Customize particle effects

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- **Desktop**: Full feature set with hover effects
- **Tablet**: Adapted layouts and touch-friendly interactions
- **Mobile**: Optimized navigation with hamburger menu
- **All Devices**: Consistent performance and appearance

## 🔍 SEO Features

- **Meta Tags**: Proper title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading hierarchy and structure

## ⚡ Performance Optimizations

- **CSS Sprites**: Minimized HTTP requests
- **Lazy Loading**: Images and animations load on demand
- **Minification Ready**: CSS and JS can be minified for production
- **Caching**: Browser caching optimization
- **Compression**: Gzip compression support

## 🐛 Browser Support

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support
- **Mobile Browsers**: ✅ Full support

## 📞 Contact

**Aman Kumar Sahu**
- 📧 Email: amankumarsahu5678@gmail.com
- 📱 Phone: +91 7205450434
- 🌐 Website: https://amankumarsahu.dev

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section integration
- [ ] Resume/CV download
- [ ] Testimonials section
- [ ] Interactive 3D car model
- [ ] Performance metrics dashboard
- [ ] Multi-language support

---

**Built with ❤️ and high-octane performance** 🏎️💨