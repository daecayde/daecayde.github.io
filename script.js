document.getElementById('reveal-btn').addEventListener('click', function() {
    // Hide the button
    this.style.display = 'none';
    
    // Show the hidden message
    const content = document.getElementById('secret-content');
    content.classList.remove('hidden');
    content.classList.add('show');
    
    // Trigger heart rain
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // You can also use '💛'
    
    // Randomize position and speed
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);
    
    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
