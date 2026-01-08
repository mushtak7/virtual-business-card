/* THEME */
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* TYPING EFFECT */
const text = "Building modern, clean web experiences.";
let index = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 60);
  }
}
type();

/* QR CODE */
new QRCode(document.getElementById("qrCode"), {
  text: window.location.href,
  width: 120,
  height: 120,
  colorDark: "#6366f1",
  colorLight: "#ffffff"
});
