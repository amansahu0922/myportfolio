// Sports Car Themed Portfolio - JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoadingScreen();
    initNavigation();
    initHeroAnimations();
    initSkillsSection();
    initProjectsSection();
    initAchievementsSection();
    initContactForm();
    initScrollAnimations();
    initBackToTop();
    initHamburgerMenu();
});

// 1. Loading Screen
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
}

// 2. Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 3. Hero Section Animations
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const carSilhouette = document.querySelector('.car-silhouette');
    const speedTrail = document.querySelector('.speed-trail');
    
    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${parallax}px)`;
        }
    });
    
    // Racing animation on scroll
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger car animation
                if (carSilhouette) {
                    carSilhouette.style.animationPlayState = 'running';
                }
                if (speedTrail) {
                    speedTrail.style.animationPlayState = 'running';
                }
            }
        });
    });
    
    if (hero) {
        observer.observe(hero);
    }
}

// 4. Skills Section with Tachometer
function initSkillsSection() {
    const tachometerNeedle = document.querySelector('.tachometer-needle');
    const skills = [
        { name: 'Python', level: 90, icon: 'fab fa-python' },
        { name: 'Machine Learning', level: 85, icon: 'fas fa-brain' },
        { name: 'Deep Learning', level: 80, icon: 'fas fa-cogs' },
        { name: 'Web Development', level: 85, icon: 'fas fa-code' },
        { name: 'Data Structures', level: 90, icon: 'fas fa-database' },
        { name: 'AI & Automation', level: 75, icon: 'fas fa-robot' },
        { name: 'Git & GitHub', level: 85, icon: 'fab fa-git-alt' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js' }
    ];
    
    const skillsGrid = document.getElementById('skills-grid');
    
    if (skillsGrid) {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <i class="${skill.icon} skill-icon"></i>
                <h3 class="skill-name">${skill.name}</h3>
                <p class="skill-level">Performance: ${skill.level}%</p>
            `;
            skillsGrid.appendChild(skillCard);
        });
    }
    
    // Tachometer animation
    if (tachometerNeedle) {
        setTimeout(() => {
            tachometerNeedle.style.transform = 'translate(-50%, -100%) rotate(45deg)';
        }, 1000);
    }
}

// 5. Projects Section with GitHub API
function initProjectsSection() {
    const projectsGrid = document.getElementById('projects-grid');
    
    // GitHub username
    const githubUsername = 'aman-kumar-sahu';
    
    // Fetch GitHub repositories
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`)
        .then(response => response.json())
        .then(repos => {
            if (projectsGrid) {
                projectsGrid.innerHTML = ''; // Clear loading state
                
                repos.forEach(repo => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    
                    // Determine icon based on language
                    let iconClass = 'fas fa-code';
                    if (repo.language === 'Python') iconClass = 'fab fa-python';
                    if (repo.language === 'JavaScript') iconClass = 'fab fa-js';
                    if (repo.language === 'HTML') iconClass = 'fab fa-html5';
                    if (repo.language === 'CSS') iconClass = 'fab fa-css3';
                    
                    projectCard.innerHTML = `
                        <div class="project-image">
                            <i class="${iconClass} project-icon"></i>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${repo.name}</h3>
                            <p class="project-desc">${repo.description || 'No description available.'}</p>
                            <div class="project-tech">
                                ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
                                <span class="tech-tag">GitHub</span>
                            </div>
                            <div class="project-links">
                                <a href="${repo.html_url}" target="_blank" class="project-link">View Repository</a>
                                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="project-link">Live Demo</a>` : ''}
                            </div>
                        </div>
                    `;
                    
                    projectsGrid.appendChild(projectCard);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching GitHub repos:', error);
            if (projectsGrid) {
                projectsGrid.innerHTML = `
                    <div class="project-card">
                        <div class="project-content">
                            <h3>Unable to Load Projects</h3>
                            <p>Please check your internet connection or try again later.</p>
                        </div>
                    </div>
                `;
            }
        });
}

// 6. Achievements Section
function initAchievementsSection() {
    const achievementsGrid = document.getElementById('achievements-grid');
    
    const achievements = [
        {
            title: 'Python Developer',
            description: 'Expert in Python programming with extensive experience in automation and scripting.',
            icon: 'fab fa-python'
        },
        {
            title: 'Machine Learning Enthusiast',
            description: 'Passionate about AI and machine learning technologies.',
            icon: 'fas fa-brain'
        },
        {
            title: 'Web Development',
            description: 'Skilled in modern web technologies and frameworks.',
            icon: 'fas fa-code'
        },
        {
            title: 'Problem Solver',
            description: 'Strong analytical skills with a focus on efficient solutions.',
            icon: 'fas fa-lightbulb'
        }
    ];
    
    if (achievementsGrid) {
        achievements.forEach(achievement => {
            const achievementCard = document.createElement('div');
            achievementCard.className = 'achievement-card';
            achievementCard.innerHTML = `
                <i class="${achievement.icon} achievement-icon"></i>
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-desc">${achievement.description}</p>
            `;
            achievementsGrid.appendChild(achievementCard);
        });
    }
}

// 7. Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:amankumarsahu5678@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            contactForm.reset();
            
            // Show success message (simulated)
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
}

// 8. Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 9. Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 10. Hamburger Menu for Mobile
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// 11. Particle System Animation
function createParticles() {
    const container = document.querySelector('.particle-system');
    
    if (container) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = Math.random() > 0.5 ? 'var(--neon-blue)' : 'var(--neon-red)';
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
            particle.style.borderRadius = '50%';
            
            container.appendChild(particle);
        }
    }
}

// Add CSS for floating particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize particles after DOM loads
document.addEventListener('DOMContentLoaded', createParticles);

// 12. Speedometer Animation Enhancement
function enhanceSpeedometer() {
    const needle = document.querySelector('.tachometer-needle');
    
    if (needle) {
        // Animate needle on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const percentage = (scrollPosition / maxScroll) * 90; // 0 to 90 degrees
            
            needle.style.transform = `translate(-50%, -100%) rotate(${-45 + percentage}deg)`;
        });
    }
}

// Initialize speedometer enhancement
document.addEventListener('DOMContentLoaded', enhanceSpeedometer);

// 13. GitHub Stats Update
function updateGitHubStats() {
    const githubUsername = 'aman-kumar-sahu';
    const reposElement = document.getElementById('github-repos');
    const starsElement = document.getElementById('github-stars');
    
    fetch(`https://api.github.com/users/${githubUsername}`)
        .then(response => response.json())
        .then(data => {
            if (reposElement) {
                reposElement.textContent = data.public_repos;
            }
            if (starsElement) {
                // Note: GitHub API doesn't provide total stars directly
                // This would require fetching all repos and summing stargazers_count
                starsElement.textContent = '100+';
            }
        })
        .catch(error => {
            console.error('Error fetching GitHub stats:', error);
        });
}

// Update GitHub stats
document.addEventListener('DOMContentLoaded', updateGitHubStats);

// 14. Enhanced About Section Bio
function updateAboutBio() {
    const bioElement = document.getElementById('about-bio');
    
    if (bioElement) {
        // Enhanced bio text
        const enhancedBio = "Engineer and passionate developer specializing in Python, Machine Learning, and cutting-edge technologies. I combine technical expertise with creative problem-solving to build high-performance solutions. With a strong foundation in data structures, algorithms, and modern development practices, I'm committed to writing clean, efficient code that drives innovation.";
        
        // Type writer effect
        let i = 0;
        const typeWriter = () => {
            if (i < enhancedBio.length) {
                bioElement.textContent = enhancedBio.substring(0, i + 1);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
}

// Update about bio
document.addEventListener('DOMContentLoaded', updateAboutBio);

// 15. Performance Monitoring
function monitorPerformance() {
    // Log performance metrics
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
            }, 0);
        });
    }
}

// Monitor performance
document.addEventListener('DOMContentLoaded', monitorPerformance);

// 16. Accessibility Enhancements
function enhanceAccessibility() {
    // Add ARIA labels
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach((button, index) => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', `Button ${index + 1}`);
        }
    });
    
    // Keyboard navigation for projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = card.querySelector('.project-link');
                if (link) link.click();
            }
        });
    });
}

// Enhance accessibility
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

console.log('🚀 Sports Car Portfolio loaded successfully!');