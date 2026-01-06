// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// QR Code
const qrContainer = document.getElementById("qrCode");

// CHANGE this after deployment
const websiteURL = "https://your-username.github.io/virtual-business-card/";

const qrImage = document.createElement("img");
qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${websiteURL}`;
qrImage.alt = "QR Code";
qrContainer.appendChild(qrImage);

// Typing Animation
const text = "Aspiring Full Stack Developer focused on creating practical web solutions using modern technologies.";
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
