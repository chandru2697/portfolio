document.addEventListener("DOMContentLoaded", () => {
    // Inject custom plugins or extension dependencies safely if GSAP is available
    gsap.registerPlugin(ScrollTrigger);

    initPreloader();
    initCustomCursor();
    initScrollProgress();
    initMagneticElements();
    initGsapSequences();
    initPortfolioFiltering();
});

/**
 * Premium Loading Sequence Engine
 */
function initPreloader() {
    const progressEl = document.querySelector(".preloader-progress");
    const preloader = document.querySelector(".preloader");
    
    let loadingTimeline = gsap.timeline({
        onComplete: () => {
            preloader.style.display = "none";
        }
    });

    loadingTimeline.to(progressEl, {
        width: "100%",
        duration: 1.4,
        ease: "power2.inOut"
    }).to(preloader, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.out"
    });
}

/**
 * Hardware Accelerated Luxury Fluid Cursor Pipeline
 */
function initCustomCursor() {
    const cursor = document.querySelector(".custom-cursor");
    const dot = document.querySelector(".custom-cursor-dot");
    
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant target assignment for central core dot
        gsap.set(dot, { x: mouseX, y: mouseY });
    });

    // Lag execution frame loop for premium outer halo track behavior
    gsap.ticker.add(() => {
        posX += (mouseX - posX) * 0.12;
        posY += (mouseY - posY) * 0.12;
        gsap.set(cursor, { x: posX, y: posY });
    });

    // Element scale interaction hooks
    document.querySelectorAll("a, button, .filter-btn, .portfolio-card").forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.style.width = "65px";
            cursor.style.height = "65px";
            cursor.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.style.backgroundColor = "transparent";
        });
    });
}

/**
 * Top Linear Scroll Tracker Execution
 */
function initScrollProgress() {
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    });
}

/**
 * Physics-Based Magnetic Component Interaction Loop
 */
function initMagneticElements() {
    const magneticTargets = document.querySelectorAll(".magnetic");

    magneticTargets.forEach(target => {
        target.addEventListener("mousemove", function(e) {
            const rect = this.getBoundingClientRect();
            const strength = parseFloat(this.getAttribute("data-strength")) || 20;
            
            // Derive tracking offsets relative to asset frame centers
            const relX = e.clientX - rect.left - (rect.width / 2);
            const relY = e.clientY - rect.top - (rect.height / 2);

            gsap.to(this, {
                x: (relX / (rect.width / 2)) * strength,
                y: (relY / (rect.height / 2)) * strength,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        target.addEventListener("mouseleave", function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

/**
 * Cinema Scale Core GSAP ScrollTrigger Sequence Maps
 */
function initGsapSequences() {
    // 1. Hero Content Entrance Stagger
    gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.5
    });

    // 2. Continuous Micro Geometric Parallax Loops
    gsap.to(".shape-1", {
        y: -60,
        x: 30,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    gsap.to(".shape-2", {
        rotation: 360,
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // 3. Section Scroll Trigger Realizations
    document.querySelectorAll(".reveal-up").forEach(section => {
        gsap.from(section, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // 4. Timeline Directional Alternating Reveal Maps
    document.querySelectorAll(".reveal-left").forEach(item => {
        gsap.from(item, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            }
        });
    });
    document.querySelectorAll(".reveal-right").forEach(item => {
        gsap.from(item, {
            x: 50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            }
        });
    });

    // 5. Procedural Tech Matrix Progress Fill Triggers
    gsap.utils.toArray(".skill-fill").forEach(fill => {
        let targetWidth = fill.getAttribute("data-progress");
        gsap.to(fill, {
            width: targetWidth,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: fill,
                start: "top 90%"
            }
        });
    });

    // 6. Asynchronous Metric/Statistic Increment Loops
    document.querySelectorAll(".stat-num").forEach(num => {
        const target = parseInt(num.getAttribute("data-target"));
        gsap.to(num, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: num,
                start: "top 85%"
            },
            onUpdate: function() {
                num.innerHTML = Math.ceil(num.innerText) + "+";
            }
        });
    });
}

/**
 * Grid Component Layout Filter Engine
 */
function initPortfolioFiltering() {
    const filters = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".portfolio-card");

    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");

            const criteria = btn.getAttribute("data-filter");

            cards.forEach(card => {
                const targetCat = card.getAttribute("data-category");
                
                if (criteria === "all" || targetCat === criteria) {
                    gsap.to(card, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        display: "block",
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(card, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.4,
                        display: "none",
                        ease: "power2.out"
                    });
                }
            });
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const subtitleEl = document.querySelector('.hero-subtitle');
    const roles = ["Senior Web Developer", "Senior Wordpress Developer", "Creative Problem Solver"];
    let index = 0;

    function changeRole() {
        subtitleEl.classList.remove('typing');
        subtitleEl.classList.add('erasing');

        // Wait for it to shrink to 0 width
        setTimeout(() => {
            index = (index + 1) % roles.length;
            subtitleEl.textContent = roles[index];
            
            // Brief pause at zero width before expanding out again
            setTimeout(() => {
                subtitleEl.classList.remove('erasing');
                subtitleEl.classList.add('typing');
            }, 50);
            
        }, 1000); // Matches the 1s CSS transition time
    }

    subtitleEl.classList.add('typing');
    setInterval(changeRole, 4000);
});




document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".timeline");
    const glowingBall = document.querySelector(".timeline-glowing-ball");

    if (!timeline || !glowingBall) return;

    // Physics state
    let targetY = 0;
    let currentY = 0;
    let currentVelocity = 0;
    const ease = 0.08; // Lower = smoother/sweeter lag, Higher = tighter tracking

    // Calculate where the ball SHOULD be based on scroll
    function calculateTarget() {
        const timelineRect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Target focal point at middle of screen
        const startPoint = viewportHeight / 2;
        const totalHeight = timelineRect.height;
        const currentPosition = startPoint - timelineRect.top;

        let progress = currentPosition / totalHeight;
        progress = Math.max(0, Math.min(1, progress));

        targetY = progress * totalHeight;
    }

    // Continuous RAF Render Loop (Inertia & Deformation Physics)
    function animate() {
        // Linear Interpolation (Lerp)
        const dy = targetY - currentY;
        currentY += dy * ease;
        currentVelocity = dy * ease; // Velocity indicator

        // Squash and stretch logic based on scroll speed
        const speed = Math.abs(currentVelocity);
        const stretch = Math.min(speed * 0.04, 0.5); // Max 50% stretch
        const scaleX = 1 - (stretch * 0.3); // Squash horizontally
        const scaleY = 1 + stretch;         // Stretch vertically

        // Dynamic glow intensity boosted by speed
        const glowRadius = 15 + Math.min(speed * 2, 25);
        const glowOpacity = 0.8 + Math.min(speed * 0.05, 0.2);

        // Apply spatial & visual transformations
        glowingBall.style.transform = `translate(-50%, ${currentY}px) scale(${scaleX}, ${scaleY})`;
        glowingBall.style.boxShadow = `
            0 0 ${glowRadius}px #DC9C3A,
            0 0 ${glowRadius * 2}px rgba(220, 156, 58, ${glowOpacity}),
            0 0 ${glowRadius * 3}px rgba(114, 70, 3, 0.6)
        `;

        requestAnimationFrame(animate);
    }

    // Event listeners
    window.addEventListener("scroll", calculateTarget, { passive: true });
    window.addEventListener("resize", calculateTarget);

    // Initialize loop
    calculateTarget();
    animate();
});


gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".edu-card");

cards.forEach((card, i) => {

  ScrollTrigger.create({
    trigger: card,
    start: () => `top+=${i * 0} top+=120`,
    endTrigger: ".education-grid",
    end: "bottom top+=120",
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    invalidateOnRefresh: true
  });

});
