const canvas = document.getElementById('heart-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 15 + 10,
    speed: Math.random() * 0.6 + 0.3,
    opacity: Math.random() * 0.5 + 0.3
  });
}

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
  ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fillStyle = 'rgba(255,105,159,0.5)';
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let heart of hearts) {
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
    heart.y -= heart.speed;
    if (heart.y < -20) {
      heart.y = canvas.height + 20;
      heart.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
