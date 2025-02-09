// Love quotes array
const quotes = [
  "Love is not just a feeling, it's a heartbeat.",
  "Every heartbeat whispers your name.",
  "In your arms is where I belong.",
  "Our love story is my favorite.",
  "You have my whole heart for my whole life.",
  "Love is the poetry of the senses.",
];

let currentIndex = -1;
const heart = document.querySelector(".heart");
const quoteContainer = document.querySelector(".quote-container");
let isAnimating = false;

heart.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  quoteContainer.style.opacity = "0";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % quotes.length;
    quoteContainer.textContent = quotes[currentIndex];

    quoteContainer.style.opacity = "1";
    isAnimating = false;
  }, 500);
});
