
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


const typingText = document.querySelector('.typing-text');
const textToType = "Welcome to my portfolio! I'm a web developer passionate about creating dynamic web experiences.creative Front-End Web Developer dedicated to building responsive, user-friendly, and visually appealing websites. I specialize in crafting dynamic web applications using HTML, CSS, and JavaScript.";
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typingText.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;

function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  if (category === 'all') {
    projectCards.forEach(card => card.style.display = 'block');
  } else {
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
}


const contactForm = document.getElementById('contactForm');
const formMsg = document.querySelector('.form-msg');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = 'Please fill out all fields!';
    formMsg.style.color = 'red';
    return;
  }

  formMsg.textContent = 'Message sent successfully! Thank you for reaching out.';
  formMsg.style.color = 'green';
  contactForm.reset();
});