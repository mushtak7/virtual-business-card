/* =========================
   Dark Mode Toggle
========================= */
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* =========================
   Typing Animation (Bio)
========================= */
const text =
    "Aspiring Full Stack Developer focused on creating practical web solutions using modern technologies.";

const typingElement = document.getElementById("typingText");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 40);
    }
}

typeText();

/* =========================
   QR Code (WORKING VERSION)
========================= */
const qrContainer = document.getElementById("qrCode");

// Clear container (safety)
qrContainer.innerHTML = "";

new QRCode(qrContainer, {
    text: "https://mushtak7.github.io/virtual-business-card/",
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
