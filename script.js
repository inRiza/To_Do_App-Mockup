/* for sidebar pops out */
function sidebarClick() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
}

function navClick(click) {
    const navLink = document.querySelectorAll(".nav_link");
    
    navLink.forEach(link => link.classList.remove("active"));

    click.currentTarget.classList.add("active");
}

document.querySelectorAll(".nav_link").forEach(link => {
    link.addEventListener("click", navClick);
});
