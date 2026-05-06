// ==========================================
// 1. ADD YOUR POEM HERE
// ==========================================
// Each line of text inside the quotes is a line of your poem.
// Use `\n` to create a blank line between stanzas.

const myPoem = `In the morning light, you shine so bright,
A beauty that clears the darkest night.

(Replace these lines with your actual poem.)
(Write as much as you want!)

Our vibe is unmatched, it's plain to see,
Shravani, you mean the world to me.`;

// ==========================================
// 2. INTERACTIVE LOGIC (Leave this as is!)
// ==========================================

// Handle the first button (Hearts & Secret Message)
document.getElementById('reveal-btn').addEventListener('click', function() {
    this.style.display = 'none'; // Hide button
    
    const content = document.getElementById('secret-content');
    content.classList.remove('hidden');
    content.classList.add('show');
    
    // Trigger heart rain
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

// Handle opening the Poem Modal
const poemModal = document.getElementById('poem-modal');
const typeWriterElement = document.getElementById('typewriter-text');
let isTyping = false;

document.getElementById('poem-btn').addEventListener('click', function() {
    poemModal.classList.remove('hidden');
    poemModal.classList.add('show-modal');
    
    // Start typewriter effect if it hasn't run yet
    if (!isTyping && typeWriterElement.innerHTML === '') {
        typeWriter(myPoem, 0);
    }
});

// Handle closing the Poem Modal
document.getElementById('close-poem').addEventListener('click', function() {
    poemModal.classList.remove('show-modal');
    setTimeout(() => {
        poemModal.classList.add('hidden');
    }, 500); // Wait for fade out animation
});

// Typewriter Function
function typeWriter(text, i) {
    isTyping = true;
    if (i < text.length) {
        // Handle newlines correctly
        if (text.charAt(i) === '\n') {
            typeWriterElement.innerHTML += '<br>';
        } else {
            typeWriterElement.innerHTML += text.charAt(i);
        }
        
        // Adjust speed here (50ms is standard, make it lower for faster typing)
        setTimeout(() => typeWriter(text, i + 1), 40);
    } else {
        // Add blinking cursor at the end
        typeWriterElement.innerHTML += '<span class="cursor"></span>';
        isTyping = false;
    }
}

// Heart animation function
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
