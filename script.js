// ==========================================
// 1. ADD YOUR POEM HERE
// ==========================================
// Each line of text inside the quotes is a line of your poem.
// Use `\n` to create a blank line between stanzas.

const myPoem = `In the morning light, you shine so bright,
A beauty that clears the darkest night.
Like the graceful light, you bless my day
I love you so damn much and I follow your every way.
Like the sunflower when in need of light I turn to thee,
you lift me up and set me free
from all the sorrows and pains I get
I thank thee lord for how we met.
Good morning my love rise and shine,
I wanna feel the joy everyday of calling you mine.}`;

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
