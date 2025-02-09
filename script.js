const quotes = [
  "Love is not just a feeling, it's a heartbeat.",
  "Every heartbeat whispers your name.",
  "In your arms is where I belong.",
  "Our love story is my favorite.",
  "You have my whole heart for my whole life.",
  "Love is the poetry of the senses.",
  "In all the world, there is no heart for me like yours.",
  "Every love story is beautiful, but ours is my favorite.",
  "You make my heart skip a beat.",
  "Love is composed of a single soul inhabiting two bodies.",
];

let currentIndex = -1;
const heart = document.querySelector(".heart-wrapper");
const quoteContainer = document.querySelector(".quote-container");
const quoteElement = document.querySelector(".quote");
const controls = document.querySelector(".controls");
const prevBtn = document.querySelector(".prev-quote");
const nextBtn = document.querySelector(".next-quote");
const addQuoteBtn = document.querySelector(".add-quote");
const themeToggle = document.querySelector(".theme-toggle");
let isAnimating = false;

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.querySelector(".floating-hearts").appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

setInterval(createFloatingHeart, 300);

function updateQuote(direction = 1) {
  if (isAnimating) return;
  isAnimating = true;

  quoteContainer.classList.remove("visible");

  setTimeout(() => {
    currentIndex = (currentIndex + direction + quotes.length) % quotes.length;
    quoteElement.textContent = quotes[currentIndex];
    quoteContainer.classList.add("visible");
    controls.classList.add("visible");
    isAnimating = false;
  }, 500);
}

heart.addEventListener("click", () => updateQuote(1));
prevBtn.addEventListener("click", () => updateQuote(-1));
nextBtn.addEventListener("click", () => updateQuote(1));

addQuoteBtn.addEventListener("click", () => {
  const newQuote = prompt("Enter your love quote:");
  if (newQuote && newQuote.trim()) {
    quotes.push(newQuote.trim());
    updateQuote(1);
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

quoteElement.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(quoteElement.textContent);
    const copyIndicator = document.querySelector(".copy-indicator");
    copyIndicator.classList.add("show");
    quoteElement.classList.add("copied");

    setTimeout(() => {
      copyIndicator.classList.remove("show");
      quoteElement.classList.remove("copied");
    }, 1000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});

// Initial quote display
setTimeout(() => {
  updateQuote(1);
}, 1000);
