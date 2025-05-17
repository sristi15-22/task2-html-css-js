function showMessage() {
  alert("Keep reading and growing, Sristi!");
}

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  status.textContent = "Thank you for contacting me!";
  status.classList.remove("hidden");
});

// To-Do List with Completed Tasks
function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    document.getElementById("completed-tasks").appendChild(li);
    li.style.textDecoration = "line-through";
    li.style.backgroundColor = "#dcedc8";
  });

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

// Show/Hide Sections Like Slides
function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.remove("hidden");
      section.classList.add("active-section");
    } else {
      section.classList.add("hidden");
      section.classList.remove("active-section");
    }
  });
}
