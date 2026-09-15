// ===============================
// DARK / LIGHT THEME TOGGLE
// ===============================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");

// Set theme
function setTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light-mode");

        if (themeIcon) {
            themeIcon.textContent = "☀";
        }

        if (themeToggle) {
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        }

        localStorage.setItem("theme", "light");

    } else {
        document.body.classList.remove("light-mode");

        if (themeIcon) {
            themeIcon.textContent = "☾";
        }

        if (themeToggle) {
            themeToggle.setAttribute("aria-label", "Switch to light mode");
        }

        localStorage.setItem("theme", "dark");
    }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isLightMode = document.body.classList.contains("light-mode");

        if (isLightMode) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    });
}