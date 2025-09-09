// script.js

// Flip animation for cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

// Show current time in footer
function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

And in your style.css, add the flip animation styles:

/* Flip card effect */
.card {
  perspective: 1000px;
  position: relative;
  width: 180px;
  height: 100px;
  cursor: pointer;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card .front, 
.card .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #4db6ac;
  border-radius: 12px;
}

.card .front {
  background: #111827;
  color: #fff;
}

.card .back {
  background: #4db6ac;
  color: #111827;
  transform: rotateY(180deg);
}
// script.js

// Flip animation for cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

// Show current time in footer
function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

