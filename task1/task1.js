const quotesByMood = {
  happy: [
    "Keep smiling, it makes people wonder what you're up to.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Let your smile change the world.",
    "Happiness is not something ready made. It comes from your own actions.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "For every minute you are angry, you lose sixty seconds of happiness."
  ],
  sad: [
    "Even the darkest night will end and the sun will rise.",
    "Sadness flies away on the wings of time.",
    "It's okay to be sad, it means you care.",
    "Tears come from the heart and not from the brain.",
    "It’s hard to forget someone who gave you so much to remember." ,
    "Sadness flies away on the wings of time."
  ],
  motivated: [
    "Push yourself, because no one else is going to do it for you.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success doesn’t come to you, you go to it.",
    "You don’t have to be great to start, but you have to start to be great" ,
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts." 
  ],
  stressed: [
    "Almost everything will work again if you unplug it for a few minutes.",
    "You don’t have to control your thoughts.",
    "Take a deep breath. It’s just a bad day, not a bad life.",
    "The greatest weapon against stress is our ability to choose one thought over another.",
    "You can’t go back and change the beginning, but you can start where you are and",
    "You don’t have to control your thoughts."
  ]
};

const moodKeywords = {
  happy: "smile,joy,celebration",
  sad: "rain,lonely,blue",
  motivated: "mountain,success,drive",
  stressed: "relaxation,peace,calm"
};

function extractKeywordsFromQuote(quote) {
  const stopWords = ["the", "and", "for", "with", "not", "just", "will", "you", "are", "from", "that", "this", "what", "your", "have"];
  const words = quote
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 4 && !stopWords.includes(w));
  return words.slice(0, 3).join(",");
}

function generateMoodQuote() {
  const name = document.getElementById("userName").value.trim();
  const mood = document.getElementById("moodSelect").value;
  const quoteText = document.getElementById("quote-text");
  const quoteImage = document.getElementById("quote-image");

  if (!name || !mood) {
    quoteText.textContent = "Please enter your name and select a mood.";
    return;
  }

  const quotes = quotesByMood[mood];
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `${name}, here's your quote: "${selectedQuote}"`;

  const quoteKeywords = extractKeywordsFromQuote(selectedQuote);
  const moodBase = moodKeywords[mood] || "inspiration";
  const fullKeywords = `${moodBase},${quoteKeywords}`;
  const imageUrl = `https://source.unsplash.com/800x400/?${encodeURIComponent(fullKeywords)}&sig=${Math.random()}`;

  quoteImage.style.opacity = 0;
  setTimeout(() => {
    quoteImage.src = imageUrl;
    quoteImage.style.opacity = 1;
  }, 400);
}

function showAlert() {
  alert("You’re amazing! Keep it up! 💖");
}
