function countTasks() {
    const noteTasks = JSON.parse(localStorage.getItem("note-tasks")) || [];

    if (noteTasks.length === 0) {
        return "<p><span>No tasks</span> to complete! 🤩</p>";
    } else {
        return `<p><strong>${noteTasks.length}</strong> task${noteTasks.length === 1 ? '' : 's'} to complete!</p>`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const noteTasksDiv = document.getElementById("note-tasks");

    if (noteTasksDiv) {
        loadNoteTasks();
        updateTaskCount();
    }

    const noteTasksForm = document.getElementById("entryForm");
    if (noteTasksForm) {
        noteTasksForm.addEventListener("submit", addTaskNote);
    }

    const editTaskForm = document.getElementById("editForm");
    if (editTaskForm) {
        const noteTaskId = new URLSearchParams(window.location.search).get("id");
        if (noteTaskId) {
            noteTaskLoadEdit(noteTaskId);
            editTaskForm.addEventListener("submit", (e) => noteTaskUpdate(e, noteTaskId));
        }
    }
});


// This imports the date function
let timeElement = document.getElementById("current-time");
let dayMonthElement = document.getElementById("current-day-month");

setInterval(() => {
    let d = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let dayMonth = d.toLocaleDateString(undefined, options);
    let currentTime = d.toLocaleTimeString();
    dayMonthElement.innerHTML = dayMonth;
    timeElement.innerHTML = currentTime;
}, 1000);


//This is copyright years by catch the current year
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});


function loadNoteTasks(limit) {
    const tasksNote = JSON.parse(localStorage.getItem("note-tasks")) || [];
    const tasksNoteDiv = document.getElementById("note-tasks");
    tasksNoteDiv.innerHTML = "";

    // Determine the number of note-tasks to display based on the limit parameter
    const displayTasksNotes = limit ? tasksNote.slice(0, limit) : tasksNote;

    displayTasksNotes.forEach((note, index) => {
        const taskNoteDiv = document.createElement("div");
        taskNoteDiv.className = `entry ${note.done ? "done" : ""}`;
        taskNoteDiv.dataset.index = index;
        taskNoteDiv.innerHTML = `
            <h3 class="entry-title"><a href="/public/view-detail.html?id=${index}">📔  ${note.title}</a></h3>
            <div class="entry-details">
                <p>${note.date}</p>
                <p>${note.content}</p>
                <div class="entry-buttons">
                    <a href="/public/view-detail.html?id=${index}"><img src="/src/images/view.png" alt="icon"></a>
                    <a href="/public/edit-diary.html?id=${index}"><img src="/src/images/edit.png" alt="icon"></a>
                    <a href="#" onclick="deleteEntry(${index})"><img src="/src/images/bin.png" alt="icon"></a>
                </div>
            </div>
        `;
        tasksNoteDiv.appendChild(taskNoteDiv);
    });

    updateTaskCount(); // Update task count after loading note-tasks
}

// This call the function with limit based on the page
document.addEventListener("DOMContentLoaded", function() {
    const checkIndexPage = window.location.pathname.endsWith("index.html");
    const limitTaskNote = checkIndexPage ? 4 : null; // Show 4 note-tasks on index page, full list otherwise
    loadNoteTasks(limitTaskNote);
});

//This is update the status tasks count
function updateTaskCount() {
    const taskCountDiv = document.getElementById("taskCount");
    if (taskCountDiv) {
        taskCountDiv.innerHTML = countTasks();
    }
}

//This function is adding the Task note
function addTaskNote(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = document.getElementById("date").value;

    const newNote = { title, content, date, done: false };
    const noteTask = JSON.parse(localStorage.getItem("note-tasks")) || [];
    noteTask.push(newNote);
    localStorage.setItem("note-tasks", JSON.stringify(noteTask));

    window.location.href = "/public/diary-list.html";
    updateTaskCount(); // Update task count after adding entry
}


function noteTaskLoadEdit(noteTaskId) {
    const noteTasks = JSON.parse(localStorage.getItem("note-tasks")) || [];
    const noteTask = noteTasks[noteTaskId];

    document.getElementById("entryId").value = noteTaskId;
    document.getElementById("editTitle").value = noteTask.title;
    document.getElementById("editContent").value = noteTask.content;
    document.getElementById("editDate").value = noteTask.date;
}


function noteTaskUpdate(event, noteTaskId) {
    event.preventDefault();
    const title = document.getElementById("editTitle").value;
    const content = document.getElementById("editContent").value;
    const date = document.getElementById("editDate").value;

    const noteTasks = JSON.parse(localStorage.getItem("note-tasks")) || [];
    noteTasks[noteTaskId] = { ...noteTasks[noteTaskId], title, content, date };
    localStorage.setItem("note-tasks", JSON.stringify(noteTasks));

    window.location.href = "/public/diary-list.html";
    updateTaskCount(); // Update task count after updating entry
}


function deleteEntry(noteTaskId) {
    const noteTasks = JSON.parse(localStorage.getItem("note-tasks")) || [];
    noteTasks.splice(noteTaskId, 1);
    localStorage.setItem("note-tasks", JSON.stringify(noteTasks));

    loadNoteTasks(); // Reload task note after deletion
    updateTaskCount(); // Update task count after deletion
}
