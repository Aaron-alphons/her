// Floating hearts
function createHearts() {
  const body = document.body;
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${100 + Math.random() * 20}vh`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.animationDelay = `${Math.random() * 3}s`;
    heart.style.width = `${15 + Math.random() * 10}px`;
    heart.style.height = heart.style.width;
    body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
}

setInterval(createHearts, 1000);
window.onload = () => {
  createHearts();
  createSparkles();
};

// Sparkles
function createSparkles() {
  const container = document.getElementById('sparkle-container');
  for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.top = `${Math.random() * 100}vh`;
    sparkle.style.animationDuration = `${1.5 + Math.random()}s`;
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(sparkle);
  }
}
