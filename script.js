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

/* for navigation to section page */
function navigateTo(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active")); 

    document.getElementById(sectionId).classList.add("active");
}


function addTask() {
    const taskInput = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task_child");


        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check");
        
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove_button");
        removeButton.onclick = function () {
            removeTask(taskDiv);
        }
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(removeButton);

        taskList.appendChild(taskDiv);
        
        //checked checkbox design
        document.querySelectorAll('.task_child input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener("change", function() {
                const taskChild = this.closest(".task_child");
                if (this.checked) {
                    taskChild.style.setProperty('background-color', 'rgba(0, 0, 0, 0.2)', 'important');
                } else {
                    taskChild.style.setProperty('background-color', '#b291e1', 'important');
                }
            });
        });

        taskInput.value = "";
    }
}

document.getElementById("addNewTask").addEventListener("click", addTask);

/* removing task */
function removeTask(taskDiv) {
    taskDiv.remove();
}


