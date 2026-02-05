const roles = [
  "Frontend разработчик",
  "Python программист",
  "Студент"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typingEl = document.getElementById("typing");

function typingEffect() {
  const current = roles[roleIndex];

  if (!deleting) {
    typingEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) deleting = true;
  } else {
    typingEl.textContent = current.slice(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typingEffect, 120);
}

typingEffect();

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Сообщение отправлено!");
});
