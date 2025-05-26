document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.style.color = "red";
    msg.textContent = "Please fill in all fields.";
    return;
  }

  if (!validateEmail(email)) {
    msg.style.color = "red";
    msg.textContent = "Please enter a valid email.";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Message sent successfully!";
  this.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
const addBtn = document.getElementById("addTodo");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoItems");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="this.parentElement.remove()">❌</button>
  `;
  list.appendChild(li);
  input.value = "";
});
