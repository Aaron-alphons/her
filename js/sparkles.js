document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sparkle-container");

  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.position = "absolute";
    sparkle.style.width = "8px";
    sparkle.style.height = "8px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.background = "#ffb6c1";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.opacity = 0.6;
    sparkle.style.animation = "twinkle 2s linear infinite";

    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 3000);
  }

  setInterval(createSparkle, 300);
});
