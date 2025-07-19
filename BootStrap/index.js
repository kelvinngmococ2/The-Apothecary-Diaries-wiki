// Apothecary Diaries JavaScript functionality - Enhanced

// Season and episode data
const seasonData = {
    1: {
        title: "Season 1",
        episodes: 12,
        status: "Completed",
        description: "The first season introduces Maomao and her journey into the imperial palace. She solves various medical mysteries while navigating palace politics.",
        keyEpisodes: [
            "Episode 1: The Apothecary's Daughter",
            "Episode 3: The Poisoned Princess",
            "Episode 6: The Imperial Physician",
            "Episode 9: The Conspiracy",
            "Episode 12: The Truth Revealed"
        ],
        airDate: "2023-10-21",
        endDate: "2024-01-20"
    },
    2: {
        title: "Season 2",
        episodes: 12,
        status: "Airing",
        description: "The second season continues Maomao's adventures with more complex mysteries and deeper political intrigue.",
        keyEpisodes: [
            "Episode 1: Return to the Palace",
            "Episode 3: The New Consort",
            "Episode 6: The Foreign Delegation",
            "Episode 9: The Royal Banquet",
            "Episode 12: The Final Mystery"
        ],
        airDate: "2024-10-19",
        endDate: "2025-01-18",
        nextEpisode: "Episode 8",
        nextEpisodeDate: "2024-12-21"
    }
};

// Character data
const characterData = {
    maomao: {
        name: "Maomao",
        role: "Main Protagonist",
        description: "A brilliant young apothecary with exceptional knowledge of medicine and poisons.",
        image: "https://via.placeholder.com/200x300/90ee90/2d5a27?text=Maomao"
    },
    jinshi: {
        name: "Jinshi",
        role: "Palace Official",
        description: "A mysterious palace official who takes interest in Maomao's abilities.",
        image: "https://via.placeholder.com/200x300/90ee90/2d5a27?text=Jinshi"
    },
    gyokuyou: {
        name: "Gyokuyou",
        role: "Imperial Consort",
        description: "An imperial consort who becomes involved in palace politics.",
        image: "https://via.placeholder.com/200x300/90ee90/2d5a27?text=Gyokuyou"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('The Apothecary Diaries page is ready!');
    
    // Add animated welcome message with better positioning
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'apothecary-decoration';
    welcomeMessage.style.position = 'relative';
    welcomeMessage.style.zIndex = '1';
    welcomeMessage.innerHTML = `
        <div style="text-align: center; margin: 20px 0; animation: fadeInUp 1s ease-out;">
            <span style="font-size: 1.5rem; color: #90ee90; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                ✨ Welcome to the world of medicine and mystery ✨
            </span>
        </div>
    `;
    
    // Insert the welcome message after the h1
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.parentNode.insertBefore(welcomeMessage, h1Element.nextSibling);
    }
    
    // Enhanced facts with more variety
    const facts = [
        "Did you know? Ancient apothecaries used over 200 different herbs for healing, many of which are still used in modern medicine.",
        "The word 'apothecary' comes from the Greek 'apotheke' meaning 'storehouse' - they were the original pharmacists!",
        "Many modern medicines were originally derived from plants used by apothecaries, including aspirin from willow bark.",
        "Apothecaries in ancient times were often the only medical professionals available in many communities.",
        "The art of poison detection was crucial for apothecaries, as they often served as forensic experts.",
        "Herbal medicine knowledge was passed down through generations, creating family traditions of healing."
    ];
    
    // Create enhanced facts section
    const factsSection = document.createElement('div');
    factsSection.className = 'container mt-4 facts-section';
    factsSection.innerHTML = `
        <h3 style="color: #90ee90; text-align: center; font-size: 1.8rem; margin-bottom: 20px;">
             Apothecary Facts & Trivia 🌿
        </h3>
        <div class="row">
            ${facts.map((fact, index) => `
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="card" style="background-color: rgba(255, 255, 255, 0.1); border: 2px solid rgba(144, 238, 144, 0.3); border-radius: 12px; padding: 15px; height: 100%; transition: all 0.3s ease;">
                        <div class="card-body" style="padding: 12px;">
                            <p class="card-text" style="font-size: 0.95rem; line-height: 1.6; margin: 0; color: #f0f8f0;">
                                ${fact}
                            </p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Add the facts section to the page
    document.body.appendChild(factsSection);
    
    // Enhanced comment section
    const commentSection = document.createElement('div');
    commentSection.className = 'comment-section-container';
    commentSection.innerHTML = `
        <div class="container">
            <div class="comment-section mt-5">
                <h3 style="color:#90ee90; text-align: center;">
                    💬 Share Your Thoughts About The Apothecary Diaries 
                </h3>
                <div class="mb-3">
                    <input type="text" class="form-control" id="commentName" placeholder="Your name (optional)">
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="commentText" rows="4" placeholder="What do you think about the series? Share your thoughts, theories, or favorite moments!"></textarea>
                </div>
                <div class="d-flex gap-2 justify-content-center">
                    <button class="btn btn-success" id="submitComment" type="button">
                        <span style="margin-right: 8px;">📝</span>Submit Comment
                    </button>
                </div>
            </div>
            <div id="commentsList">
                <!-- Comments will be loaded here -->
            </div>
        </div>
    `;
    
    // Add the comment section after facts
    document.body.appendChild(commentSection);
    
    // Initialize all functionality
    initializeComments();
    initializeNavigation();
    startCountdown();
    addScrollEffects();
    addCharacterModal();
});

// Enhanced navigation functionality
function initializeNavigation() {
    // Home brand and link functionality
    const homeBrand = document.getElementById('homeBrand');
    const homeLink = document.getElementById('homeLink');
    
    if (homeBrand) {
        homeBrand.addEventListener('click', function(e) {
            e.preventDefault();
            goHome();
        });
    }
    
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            goHome();
        });
    }
    
    // Season dropdown functionality
    document.querySelectorAll('[data-season]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const season = this.getAttribute('data-season');
            showSeasonInfo(season);
        });
    });
    
    // Next episode link
    const nextEpisodeLink = document.getElementById('nextEpisodeLink');
    if (nextEpisodeLink) {
        nextEpisodeLink.addEventListener('click', function(e) {
            e.preventDefault();
            showNextEpisodeInfo();
        });
    }
    
    // Characters link
    const charactersLink = document.getElementById('charactersLink');
    if (charactersLink) {
        charactersLink.addEventListener('click', function(e) {
            e.preventDefault();
            showCharactersModal();
        });
    }
    
    // Gallery link
    const galleryLink = document.getElementById('galleryLink');
    if (galleryLink) {
        galleryLink.addEventListener('click', function(e) {
            e.preventDefault();
            showGalleryModal();
        });
    }
}

// Enhanced go home function
function goHome() {
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Hide countdown display if it's showing
    const countdownDisplay = document.getElementById('countdownDisplay');
    if (countdownDisplay) {
        countdownDisplay.style.display = 'none';
    }
    
    // Add visual feedback
    const homeBrand = document.getElementById('homeBrand');
    if (homeBrand) {
        homeBrand.style.transform = 'scale(1.1)';
        setTimeout(() => {
            homeBrand.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Show welcome message animation
    const welcomeMessage = document.querySelector('.apothecary-decoration');
    if (welcomeMessage) {
        welcomeMessage.style.opacity = '0';
        setTimeout(() => {
            welcomeMessage.style.opacity = '1';
        }, 100);
    }
}

// Enhanced season info modal
function showSeasonInfo(seasonNumber) {
    const season = seasonData[seasonNumber];
    if (!season) return;
    
    const modalBody = document.getElementById('seasonModalBody');
    modalBody.innerHTML = `
        <div class="season-info">
            <h3 style="color: #90ee90; text-align: center; margin-bottom: 25px;">${season.title}</h3>
            <div class="row">
                <div class="col-md-6">
                    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                        <h5 style="color: #90ee90; margin-bottom: 15px;">📊 Season Statistics</h5>
                        <p><strong>Episodes:</strong> ${season.episodes}</p>
                        <p><strong>Status:</strong> ${season.status}</p>
                        <p><strong>Air Date:</strong> ${season.airDate}</p>
                        <p><strong>End Date:</strong> ${season.endDate}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px;">
                        <h5 style="color: #90ee90; margin-bottom: 15px;"> Key Episodes</h5>
                        <ul style="color: #f0f8f0;">
                            ${season.keyEpisodes.map(episode => `<li>${episode}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <h5 style="color: #90ee90; margin-bottom: 15px;">📖 Description</h5>
                <p style="color: #f0f8f0; line-height: 1.8;">${season.description}</p>
            </div>
        </div>
    `;
    
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('seasonModal'));
    modal.show();
}

// Enhanced next episode info
function showNextEpisodeInfo() {
    const season2 = seasonData[2];
    const modalBody = document.getElementById('seasonModalBody');
    modalBody.innerHTML = `
        <div class="next-episode-info">
            <h3 style="color: #90ee90; text-align: center; margin-bottom: 25px;">⏰ Next Episode Information</h3>
            <div class="alert alert-info" style="background: rgba(144, 238, 144, 0.1); border-color: #90ee90; color: #f0f8f0;">
                <h5 style="color: #90ee90;">${season2.nextEpisode}</h5>
                <p><strong>Release Date:</strong> ${season2.nextEpisodeDate}</p>
                <p><strong>Season:</strong> ${season2.title}</p>
            </div>
            <div class="countdown-section">
                <h5 style="color: #90ee90; margin-bottom: 15px;">⏳ Countdown to Next Episode:</h5>
                <div class="countdown-display-large" id="modalCountdown" style="text-align: center; font-size: 1.2rem; color: #90ee90;"></div>
            </div>
        </div>
    `;
    
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('seasonModal'));
    modal.show();
    
    // Start countdown in modal
    startModalCountdown();
}

// Add character modal functionality
function addCharacterModal() {
    const modalHTML = `
        <div class="modal fade" id="characterModal" tabindex="-1" aria-labelledby="characterModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="characterModalLabel">Character Profiles</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="characterModalBody">
                        <!-- Character content will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Show characters modal
function showCharactersModal() {
    const modalBody = document.getElementById('characterModalBody');
    modalBody.innerHTML = `
        <div class="row">
            ${Object.values(characterData).map(character => `
                <div class="col-md-4 mb-3">
                    <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center;">
                        <img src="${character.image}" alt="${character.name}" style="width: 100%; max-width: 200px; border-radius: 10px; margin-bottom: 15px;">
                        <h5 style="color: #90ee90; margin-bottom: 10px;">${character.name}</h5>
                        <p style="color: #90ee90; font-weight: bold; margin-bottom: 10px;">${character.role}</p>
                        <p style="color: #f0f8f0; font-size: 0.9rem;">${character.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('characterModal'));
    modal.show();
}

// Show gallery modal
function showGalleryModal() {
    const modalBody = document.getElementById('seasonModalBody');
    modalBody.innerHTML = `
        <div class="gallery-info">
            <h3 style="color: #90ee90; text-align: center; margin-bottom: 25px;">🖼️ Gallery Coming Soon</h3>
            <p style="color: #f0f8f0; text-align: center; font-size: 1.1rem;">
                We're working on adding a beautiful gallery of screenshots and artwork from The Apothecary Diaries. 
                Check back soon for stunning visuals from the series!
            </p>
        </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('seasonModal'));
    modal.show();
}

// Enhanced countdown functionality
function startCountdown() {
    const season2 = seasonData[2];
    const nextEpisodeDate = new Date(season2.nextEpisodeDate);
    const now = new Date();
    
    if (nextEpisodeDate > now) {
        document.getElementById('countdownDisplay').style.display = 'block';
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

function updateCountdown() {
    const season2 = seasonData[2];
    const nextEpisodeDate = new Date(season2.nextEpisodeDate);
    const now = new Date();
    const timeLeft = nextEpisodeDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('countdownTimer').innerHTML = 
            `<span style="color: #90ee90;">${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
    } else {
        document.getElementById('countdownTimer').innerHTML = "<span style='color: #90ee90;'>Episode Released! </span>";
    }
}

function startModalCountdown() {
    const modalCountdown = document.getElementById('modalCountdown');
    if (!modalCountdown) return;
    
    const season2 = seasonData[2];
    const nextEpisodeDate = new Date(season2.nextEpisodeDate);
    const now = new Date();
    const timeLeft = nextEpisodeDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        modalCountdown.innerHTML = `
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                <div style="background: rgba(144, 238, 144, 0.2); padding: 10px 15px; border-radius: 8px; min-width: 80px;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #90ee90;">${days}</div>
                    <div style="font-size: 0.8rem; color: #f0f8f0;">Days</div>
                </div>
                <div style="background: rgba(144, 238, 144, 0.2); padding: 10px 15px; border-radius: 8px; min-width: 80px;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #90ee90;">${hours}</div>
                    <div style="font-size: 0.8rem; color: #f0f8f0;">Hours</div>
                </div>
                <div style="background: rgba(144, 238, 144, 0.2); padding: 10px 15px; border-radius: 8px; min-width: 80px;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #90ee90;">${minutes}</div>
                    <div style="font-size: 0.8rem; color: #f0f8f0;">Minutes</div>
                </div>
                <div style="background: rgba(144, 238, 144, 0.2); padding: 10px 15px; border-radius: 8px; min-width: 80px;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #90ee90;">${seconds}</div>
                    <div style="font-size: 0.8rem; color: #f0f8f0;">Seconds</div>
                </div>
            </div>
        `;
    } else {
        modalCountdown.innerHTML = "<div style='text-align: center; color: #90ee90; font-size: 1.5rem;'>🎉 Episode Released! 🎉</div>";
    }
}

// Add scroll effects
function addScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.image-container');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Enhanced comment functionality
function loadComments() {
    const commentsList = document.getElementById('commentsList');
    if (!commentsList) return;
    
    commentsList.innerHTML = '';
    const comments = JSON.parse(localStorage.getItem('apothecaryComments') || '[]');
    if (comments.length === 0) {
        commentsList.innerHTML = `
            <div style="text-align: center; padding: 30px; color: rgba(240, 248, 240, 0.7);">
                <div style="font-size: 3rem; margin-bottom: 15px;">💭</div>
                <p style="font-size: 1.1rem;">No comments yet. Be the first to share your thoughts!</p>
            </div>
        `;
        return;
    }
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'single-comment mb-3 p-3 rounded';
        commentDiv.style.background = 'rgba(255,255,255,0.1)';
        commentDiv.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="width: 40px; height: 40px; background: linear-gradient(45deg, #90ee90, #98fb98); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-weight: bold; color: #2d5a27;">
                    ${comment.name ? comment.name.charAt(0).toUpperCase() : 'A'}
                </div>
                <div>
                    <strong style="color:#90ee90;">${comment.name || 'Anonymous'}</strong>
                    <span class="text-muted" style="font-size:0.9em; margin-left: 10px;">${new Date(comment.date).toLocaleString()}</span>
                </div>
            </div>
            <p style="margin:8px 0 0 0; color: #f0f8f0; line-height: 1.6;">${comment.text}</p>
        `;
        commentsList.appendChild(commentDiv);
    });
}

function saveComment(name, text) {
    const comments = JSON.parse(localStorage.getItem('apothecaryComments') || '[]');
    comments.unshift({
        name: name || 'Anonymous',
        text,
        date: new Date().toISOString()
    });
    localStorage.setItem('apothecaryComments', JSON.stringify(comments));
}

function initializeComments() {
    const submitBtn = document.getElementById('submitComment');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const name = document.getElementById('commentName').value.trim();
            const text = document.getElementById('commentText').value.trim();
            if (!text) {
                alert('Please enter a comment!');
                return;
            }
            saveComment(name, text);
            document.getElementById('commentText').value = '';
            loadComments();
            
            // Add success animation
            submitBtn.innerHTML = '<span style="margin-right: 8px;">✅</span>Comment Posted!';
            setTimeout(() => {
                submitBtn.innerHTML = '<span style="margin-right: 8px;">📝</span>Submit Comment';
            }, 2000);
        });
    }
    
    loadComments();
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});