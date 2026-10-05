const brochure = document.getElementById("brochure");

const themeToggle = document.getElementById("themeToggle");

const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");

const totalPages = 26;


// =========================
// CREATE BROCHURE PAGES
// =========================

for (let i = 1; i <= totalPages; i++) {

    const page = document.createElement("section");

    page.className = "page";

    page.id = `page-${i}`;


    const image = document.createElement("img");

    image.src = `pages/page-${i}.jpg`;

    image.alt = `Joy Journey Holidays brochure page ${i}`;

    image.loading = i === 1 ? "eager" : "lazy";


    page.appendChild(image);

    brochure.appendChild(page);
}


// =========================
// DARK / LIGHT MODE
// =========================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});


// =========================
// REMEMBER THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "🌙";

} else {

    themeToggle.textContent = "☀️";

}


// =========================
// HAMBURGER MENU
// =========================

hamburger.addEventListener("click", () => {

    const isOpen = menu.classList.toggle("active");

    if (isOpen) {

        hamburger.textContent = "✕";

        hamburger.setAttribute("aria-expanded", "true");

    } else {

        hamburger.textContent = "☰";

        hamburger.setAttribute("aria-expanded", "false");

    }

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        hamburger.textContent = "☰";

        hamburger.setAttribute("aria-expanded", "false");

    });

});


// =========================
// CLOSE MENU WHEN CLICKING
// OUTSIDE
// =========================

document.addEventListener("click", (event) => {

    const clickedInsideMenu = menu.contains(event.target);

    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideMenu && !clickedHamburger) {

        menu.classList.remove("active");

        hamburger.textContent = "☰";

        hamburger.setAttribute("aria-expanded", "false");

    }

});