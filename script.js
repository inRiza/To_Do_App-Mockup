/* for sidebar pops out */
function sidebarClick() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
}

/* for resizing if width > 860px */
window.addEventListener("resize", () => {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth > 860) {
        sidebar.style.display = "none";
    }
});

/* for clicking the navbar */
function navClick(click) {
    const navLink = document.querySelectorAll(".nav_link");

    navLink.forEach(link => link.classList.remove("active"));

    click.currentTarget.classList.add("active");
}

document.querySelectorAll(".nav_link").forEach(link => {
    link.addEventListener("click", navClick);
});
